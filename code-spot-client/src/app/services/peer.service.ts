import { EventEmitter, Injectable } from '@angular/core';
import { Message, MessageType } from '../shared/Message';
import { RoomService } from './room.service';
import { CRDT } from '../shared/CRDT';
import { EditorService } from './editor.service';
import { EnterRoomInfo } from '../shared/EnterRoomInfo';
import { PeerEvent } from '../shared/PeerEvent';
import { Utils } from '../shared/Utils';
import { BroadcastInfo } from '../shared/BroadcastInfo';
import { CursorChangeInfo } from '../shared/CursorChangeInfo';

declare const Peer: any;
const MAX_CRDT_PER_SEND = 500;
const BROADCAST_TILL_MILLI_SECONDS_LATER = 15000;
@Injectable({
  providedIn: 'root',
})
export class PeerService {
  private time = 0;
  private peer: any;
  private roomName: string;
  private connToGetOldMessages: any;
  private peerIdsToSendOldCrdts: string[] = [];
  private peerIdsToSendOldChatMessages: string[] = [];
  private peerIdsInRoom: any[] = [];
  private connectionsIAmHolding: any[] = [];
  private messagesToBeAcknowledged: Message[] = [];
  private hasReceivedAllMessages = false;
  private connsToBroadcast: any[] = [];
  private readonly CRDTDelimiter = '#$'; // Has to be at least 2 unique chars
  connectionEstablished = new EventEmitter<boolean>();
  infoBroadcasted = new EventEmitter<BroadcastInfo>();
  private receivedRemoteCrdts: CRDT[];
  private cursorChangeInfo: CursorChangeInfo;
  private previousChatMessages: Message[] = [];
  private hasReceivedAllChatMessages: boolean = false;

  constructor(
    private roomService: RoomService,
    private editorService: EditorService
  ) {}

  connectToPeerServerAndInit() {
    this.peer = new Peer({
      host: 'codespotpeerserver.herokuapp.com/',
      port: '/..',
      secure: true,
      config: {
        iceServers: [
          { url: 'stun:relay.backups.cz' },
          {
            url: 'turn:relay.backups.cz',
            username: 'webrtc',
            credential: 'webrtc',
          },
        ],
      },
      pingInterval: 3000,
      debug: 3, // Print all logs
    });
    /*this.peer = new Peer({
      host: 'localhost',
      port: 9000,
      path: '/myapp',
    });*/
    this.connectToPeerServer();
    this.registerConnectToMeEvent();
    this.logErrors();
    this.reconnectToPeerServer();
    this.subscribeToEditorServiceEvents();
    this.listenToBrowserOffline();
  }

  //************* Connect + Reconnect to PeerServer and log errors *************
  private connectToPeerServer() {
    this.peer.on(PeerEvent.Open, (myId: string) => {
      console.log('I have connected to peerServer. My id: ' + myId);
      this.connectionEstablished.emit(true);
    });
  }

  private reconnectToPeerServer() {
    this.peer.on(PeerEvent.Disconnected, () => {
      // Disconnect => destroy permanently this peer. Need to test this more!
      console.log(
        'Peer disconnect with server. Destroying peer ... (Although we should try to reconnect here)'
      );
      this.peer.destroy();
      alert('Wifi connection error! Going back home...');
      Utils.refreshAndGoBackHomePage();
    });
  }

  private logErrors() {
    this.peer.on(PeerEvent.Error, (error) => {
      console.error('PeerServer error: ');
      console.error(error);
    });
  }
  //*************************************************************

  private listenToBrowserOffline() {
    // Need a better way to check internet connection! This method is error prone
    window.addEventListener('offline', (e) => {
      alert('Please check your Internet connection. Navigating back home...');
      Utils.refreshAndGoBackHomePage();
    });
  }

  private registerConnectToMeEvent() {
    this.peer.on(PeerEvent.Connection, (conn: any) => {
      console.log('Peer ' + conn.peer + ' just sent a connect request to me');
      this.setupListenerForConnection(conn);
    });
  }

  private connectToPeer(otherPeerId: any, getOldMessages: boolean) {
    const conn = this.peer.connect(otherPeerId, {
      reliable: true,
      serialization: 'json',
    });

    if (getOldMessages === true) {
      this.connToGetOldMessages = conn;
    }
    console.log('I just send peer: ' + otherPeerId + ' a connection request');
    this.setupListenerForConnection(conn);
  }

  private connectToTheRestInRoom(exceptPeerId: any) {
    this.peerIdsInRoom.forEach((peerId) => {
      if (peerId !== exceptPeerId) {
        this.connectToPeer(peerId, false);
      }
    });
  }

  private setupListenerForConnection(conn: any) {
    // When the connection first establish
    conn.on(PeerEvent.Open, () => {
      console.log('Connection to peer ' + conn.peer + ' opened :)');
      // Only add this conn to our list when the connection has opened!
      Utils.addUniqueConnections([conn], this.connectionsIAmHolding);
      // If we need to send this peer old messages
      if (
        this.peerIdsToSendOldCrdts.findIndex((id) => id === conn.peer) !== -1
      ) {
        this.broadcastNewMessagesToConnUntil(
          conn,
          BROADCAST_TILL_MILLI_SECONDS_LATER
        );
        this.sendOldCRDTs(conn);
        this.sendOldMessages(conn);
        this.peerIdsToSendOldCrdts.filter((id) => id !== conn.peer);
        this.sendChangeLanguage(conn);
      }
      // If we chose this peer to give us all messages
      if (this.connToGetOldMessages === conn) {
        this.requestOldMessages(conn, MessageType.RequestOldCRDTs);
        this.requestOldMessages(conn, MessageType.RequestOldChatMessages);
      }
    });

    // the other peer send us some data
    conn.on(PeerEvent.Data, (message) =>
      this.handleMessageFromPeer(message, conn)
    );

    // either us or the other peer close the connection
    conn.on(PeerEvent.Close, () => this.handleConnectionClose(conn));

    conn.on(PeerEvent.Error, (error) => {
      console.error('Connection error: ');
      console.error(error);
    });
  }

  private handleMessageFromPeer(message: Message, fromConn: any) {
    switch (message.messageType) {
      case MessageType.ChangeLanguage:
        this.broadcastMessageToPeers(message, this.connsToBroadcast);
        EditorService.language = message.content;
        this.infoBroadcasted.emit(BroadcastInfo.ChangeLanguage);
        break;
      case MessageType.RemoteInsert:
      case MessageType.RemoteRemove:
        this.broadcastMessageToPeers(message, this.connsToBroadcast);
      case MessageType.OldCRDTs:
      case MessageType.OldCRDTsLastBatch:
        // Acknowledge
        // fromConn.send(
        //   new Message(null, MessageType.Acknowledge, null, null, message.time)
        // );

        // const crdts = this.stringToCRDTArr(message.content, this.CRDTDelimiter);

        const parsedCrdts: CRDT[] = JSON.parse(message.content); // plain Javascript object
        const crdts = parsedCrdts.map((crdt) =>
          CRDT.plainObjectToRealCRDT(crdt)
        );
        this.receivedRemoteCrdts = crdts;

        if (message.messageType === MessageType.RemoteInsert) {
          console.log('Receive Remote Insert');
          // peerMessagesTracker.receiveRemoteInserts(crdts);
          this.infoBroadcasted.emit(BroadcastInfo.RemoteInsert);
          // peerMessagesTracker.processDeleteBuffer();
        } else if (message.messageType === MessageType.RemoteRemove) {
          console.log('Receive Remote Remove');
          // peerMessagesTracker.receiveRemoteRemoves(crdts);
          this.infoBroadcasted.emit(BroadcastInfo.RemoteRemove);
        } else {
          console.log('Receive OldCRDTs');
          // peerMessagesTracker.receiveRemoteInserts(crdts);
          this.infoBroadcasted.emit(BroadcastInfo.RemoteAllMessages);
          if (message.messageType === MessageType.OldCRDTsLastBatch) {
            this.hasReceivedAllMessages = true;
            this.infoBroadcasted.emit(BroadcastInfo.ReadyToDisplayMonaco);
            this.connectToTheRestInRoom(this.connToGetOldMessages.peer);
            // Tell C# Server I have received AllMessages
            this.roomService.markPeerReceivedAllMessages(this.peer.id);
          }
        }
        break;
      case MessageType.RequestOldCRDTs:
        if (!this.hasReceivedAllMessages) {
          console.log(
            "I haven't received allMessages yet. Can't send to that peer"
          );
          fromConn.send(
            new Message(null, MessageType.CannotSendOldCRDTs, null, null, -1)
          );
        } else {
          // If connection hasn't opened
          if (
            this.connectionsIAmHolding.findIndex(
              (conn) => conn.peer === fromConn.peer
            ) === -1
          ) {
            this.peerIdsToSendOldCrdts.push(fromConn.peer); // Send when opened
          } else {
            this.broadcastNewMessagesToConnUntil(
              fromConn,
              BROADCAST_TILL_MILLI_SECONDS_LATER
            );
            this.sendOldCRDTs(fromConn); // send now
            this.sendChangeLanguage(fromConn);
          }
        }
        break;
      case MessageType.CannotSendOldCRDTs:
        alert(
          'The peer we picked to send us old messages cannot send. Reloading...'
        );
        window.location.reload(true);
        break;
      case MessageType.Acknowledge:
        const indexDelete = this.messagesToBeAcknowledged.findIndex(
          (mes) => mes.time === message.time
        );
        if (indexDelete !== -1) {
          this.messagesToBeAcknowledged.splice(indexDelete, 1);
        }
        break;
      case MessageType.ChatMessage:
        Utils.addUniqueMessages([message], this.previousChatMessages);
        this.infoBroadcasted.emit(BroadcastInfo.UpdateChatMessages);
        break;
      case MessageType.OldChatMessages:
        this.hasReceivedAllChatMessages = true;
        const messages: Message[] = JSON.parse(message.content);
        Utils.addUniqueMessages(messages, this.previousChatMessages);
        this.infoBroadcasted.emit(BroadcastInfo.UpdateChatMessages);
        break;
      case MessageType.RequestOldChatMessages:
        if (!this.hasReceivedAllChatMessages) {
          console.log(
            "I haven't received all chat messages yet. Can't send to that peer"
          );
          fromConn.send(
            new Message(
              null,
              MessageType.CannotSendOldChatMessages,
              null,
              null,
              -1
            )
          );
        } else {
          // If connection hasn't opened
          if (
            this.connectionsIAmHolding.findIndex(
              (conn) => conn.peer === fromConn.peer
            ) === -1
          ) {
            this.peerIdsToSendOldChatMessages.push(fromConn.peer); // Send when opened
          } else {
            this.broadcastNewMessagesToConnUntil(
              fromConn,
              BROADCAST_TILL_MILLI_SECONDS_LATER
            );
            this.sendOldMessages(fromConn); // send now
          }
        }
        break;
      case MessageType.ChangeCursor:
        const cursorEvent = JSON.parse(message.content);
        console.log(cursorEvent);
        this.cursorChangeInfo = new CursorChangeInfo(
          cursorEvent.position.lineNumber,
          cursorEvent.position.column,
          fromConn.peer
        );
        this.infoBroadcasted.emit(BroadcastInfo.CursorChange);
        break;
      default:
        console.log(message);
        throw new Error('Unhandled messageType');
    }
  }

  private handleConnectionClose(conn: any) {
    console.log(
      'Connection to ' +
        conn.peer +
        ' is closed. It will be deleted in the connectionsIAmHolding list!'
    );

    const index = this.connectionsIAmHolding.findIndex(
      (connection) => connection === conn
    );
    this.connectionsIAmHolding.splice(index, 1);
  }

  //***************** Handle when join room *******************
  private handleFirstJoinRoom(peerIds: any[], receivedAllMessages: boolean[]) {
    if (peerIds.length === 0) {
      // DO NOTHING
      console.log('I am the first one in this room');
      this.hasReceivedAllMessages = true;
      this.hasReceivedAllChatMessages = true;
    } else {
      this.peerIdsInRoom = peerIds;
      const peerIdPicked = this.pickReadyPeerToGetAllMessages(
        peerIds,
        receivedAllMessages
      );
      if (peerIdPicked === null) {
        // Error. No peer is ready. Go back home
        alert('All Peer in rooms have left. Going back to home...');
        Utils.refreshAndGoBackHomePage();
      } else {
        this.connectToPeer(peerIdPicked, true);
        this.waitTillGotAllMessagesOrRefreshIfThatPeerLeft(peerIdPicked);
      }
    }
  }

  private pickReadyPeerToGetAllMessages(
    peerIds: string[],
    receivedAllMessages: boolean[]
  ): string {
    const candidatePeerIds = [];
    for (let i = 0; i < receivedAllMessages.length; i++) {
      if (receivedAllMessages[i]) {
        candidatePeerIds.push(peerIds[i]);
      }
    }
    if (candidatePeerIds.length === 0) {
      return null;
    } else {
      const randIndex = Math.floor(Math.random() * candidatePeerIds.length);
      return candidatePeerIds[randIndex];
    }
  }

  private waitTillGotAllMessagesOrRefreshIfThatPeerLeft(
    peerIdToGetAllMessages: string
  ) {
    if (!this.hasReceivedAllMessages) {
      this.roomService.getPeerIdsInRoom(this.roomName).subscribe((peerIds) => {
        console.log(peerIds);
        console.log(peerIdToGetAllMessages);
        if (peerIds.findIndex((id) => id === peerIdToGetAllMessages) === -1) {
          console.log(
            'The peer we intended to get old messages from just left the room. Refreshing...'
          );
          window.location.reload(true);
        } else {
          const that = this;
          setTimeout(function () {
            that.waitTillGotAllMessagesOrRefreshIfThatPeerLeft(
              peerIdToGetAllMessages
            );
          }, 3000);
        }
      });
    }
  }

  private requestOldMessages(conn: any, messageType: MessageType) {
    const message = new Message(null, messageType, null, null, this.time++);
    conn.send(message);
  }

  private sendOldCRDTs(conn: any) {
    const previousCRDTs: CRDT[] = this.editorService.getOldCRDTsAsSortedArray();

    // Break huge crdts array into smaller arrays and send each one to avoid connection crash
    const crdtBatches: CRDT[][] = [];
    const numberOfTimesSend = Math.ceil(
      previousCRDTs.length / MAX_CRDT_PER_SEND
    );
    for (let i = 0; i < numberOfTimesSend; i++) {
      const startInclusive = MAX_CRDT_PER_SEND * i;
      // Taking care of the case: sending the last batch
      const endExclusive = Math.min(
        MAX_CRDT_PER_SEND * (i + 1),
        previousCRDTs.length
      );
      crdtBatches.push(previousCRDTs.slice(startInclusive, endExclusive));
    }

    // const crdtStrings: string[] = [];
    // for (let i = 0; i < numberOfTimesSend; i++) {
    //   crdtStrings.push(this.crdtArrToString(crdtBatches[i], this.CRDTDelimiter));
    // }

    const crdtJSONs: string[] = [];
    for (let i = 0; i < numberOfTimesSend; i++) {
      crdtJSONs.push(JSON.stringify(crdtBatches[i]));
    }

    for (let i = 0; i < numberOfTimesSend; i++) {
      const messageType =
        i === numberOfTimesSend - 1
          ? MessageType.OldCRDTsLastBatch
          : MessageType.OldCRDTs;
      const message = new Message(
        crdtJSONs[i],
        messageType,
        this.peer.id,
        conn.peer,
        this.time++
      );
      conn.send(message);
    }

    // this.messagesToBeAcknowledged.push(message);
    // const that = this; // setTimeOut will not know what 'this' is => Store 'this' in a variable
    // setTimeout(function () {
    //   that.acknowledgeOrResend(message);
    // }, that.timeWaitForAck);
  }

  private sendOldMessages(conn: any) {
    const message = new Message(
      JSON.stringify(this.previousChatMessages),
      MessageType.OldChatMessages,
      this.peer.id,
      conn.peer,
      this.time++
    );
    conn.send(message);
  }

  //*************************************************************

  createNewRoom() {
    this.roomService
      .joinNewRoom(this.peer.id)
      .subscribe((data: EnterRoomInfo) => {
        this.roomName = data.roomName;
        EditorService.setSiteId(data.siteId);
        // No peerId
        this.handleFirstJoinRoom([], []);
        this.infoBroadcasted.emit(BroadcastInfo.RoomName);
        this.infoBroadcasted.emit(BroadcastInfo.ReadyToDisplayMonaco);
      });
  }

  joinExistingRoom(roomName: string) {
    this.roomName = roomName;
    this.roomService.joinExistingRoom(this.peer.id, this.roomName).subscribe(
      (data: EnterRoomInfo) => {
        if (data.siteId === -1) {
          // Either room not exists or has been deleted
          alert('Room not exists, navigating back to home');
          Utils.refreshAndGoBackHomePage();
        }
        EditorService.setSiteId(data.siteId);
        const boolArrHasReceivedAllMessages = data.hasReceivedAllMessages.map(
          (num) => (num === 0 ? false : true)
        );
        this.handleFirstJoinRoom(data.peerIds, boolArrHasReceivedAllMessages);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  broadcastInsertOrRemove(crdts: CRDT[], isInsert: boolean) {
    const messageType = isInsert
      ? MessageType.RemoteInsert
      : MessageType.RemoteRemove;

    // Break huge crdts array into smaller arrays and send each one to avoid connection crash
    const crdtBatches: CRDT[][] = [];
    const numberOfTimesSend = Math.ceil(crdts.length / MAX_CRDT_PER_SEND);
    for (let i = 0; i < numberOfTimesSend; i++) {
      const startInclusive = MAX_CRDT_PER_SEND * i;
      const endExclusive = Math.min(MAX_CRDT_PER_SEND * (i + 1), crdts.length); // In case sending the last batch
      crdtBatches.push(crdts.slice(startInclusive, endExclusive));
    }

    // const crdtStrings: string[] = [];
    // for (let i = 0; i < numberOfTimesSend; i++) {
    //   crdtStrings.push(this.crdtArrToString(crdtBatches[i], this.CRDTDelimiter));
    // }
    const crdtJSONs: string[] = [];
    for (let i = 0; i < numberOfTimesSend; i++) {
      crdtJSONs.push(JSON.stringify(crdtBatches[i]));
    }

    for (let i = 0; i < numberOfTimesSend; i++) {
      this.connectionsIAmHolding.forEach((conn) => {
        const messageToSend = new Message(
          crdtJSONs[i],
          messageType,
          this.peer.id,
          conn.peer,
          this.time++
        );
        conn.send(messageToSend);
        // this.messagesToBeAcknowledged.push(messageToSend);
        // const that = this; // setTimeOut will not know what 'this' is => Store 'this' in a variable
        // setTimeout(function () {
        //   that.acknowledgeOrResend(messageToSend);
        // }, that.timeWaitForAck);
      });
    }
  }

  private broadcastNewMessagesToConnUntil(
    conn: any,
    milliSecondsLater: number
  ) {
    this.connsToBroadcast.push(conn);
    const that = this;
    setTimeout(function () {
      that.connsToBroadcast = that.connsToBroadcast.filter(
        (connection) => connection.peer !== conn.peer
      );
    }, milliSecondsLater);
  }

  private broadcastMessageToPeers(message: Message, conns: any[]) {
    conns.forEach((connection) => {
      connection.send(message);
    });
  }

  // acknowledgeOrResend(mess: Message, hasSent = 0) {
  //   // If message hasn't been received
  //   if (
  //     this.messagesToBeAcknowledged.find(
  //       (message) => message.time === mess.time
  //     )
  //   ) {
  //     const conn = this.connectionsIAmHolding.find(
  //       (connection) => connection.peer === mess.toPeerId
  //     );
  //     // Has sent for more than 5 times
  //     if (hasSent > 5) {
  //       this.connectionsIAmHolding = this.connectionsIAmHolding.filter(
  //         (connection) => connection.peer !== conn.peer
  //       );
  //       return;
  //     }

  //     // If that peer hasn't disconnect
  //     if (conn) {
  //       conn.send(mess);
  //       console.log('Waiting too long for ack. Resent messages');
  //       const that = this; // setTimeOut will not know what 'this' is => Store 'this' in a variable
  //       setTimeout(function () {
  //         that.acknowledgeOrResend(mess, hasSent + 1);
  //       }, that.timeWaitForAck);
  //     }
  //   }
  // }

  broadcastChangeLanguage() {
    this.connectionsIAmHolding.forEach((conn) => {
      this.sendChangeLanguage(conn);
    });
  }

  sendChangeLanguage(conn: any) {
    const messageToSend = new Message(
      EditorService.language,
      MessageType.ChangeLanguage,
      this.peer.id,
      conn.peer,
      -1 // for test purpose
    );
    conn.send(messageToSend);
  }

  sendMessage(content: string) {
    if (content.length === 0) {
      return;
    }

    this.previousChatMessages.push(
      new Message(
        content,
        MessageType.ChatMessage,
        this.peer.id,
        null,
        this.time
      )
    );

    this.connectionsIAmHolding.forEach((conn) => {
      const messageToSend = new Message(
        content,
        MessageType.ChatMessage,
        this.peer.id,
        conn.peer,
        this.time
      );

      conn.send(messageToSend);
    });
    this.time++;
  }

  /* Cursor Change + Selection Change*/
  broadcastChangeCursorPos(event: any) {
    this.connectionsIAmHolding.forEach((conn) => {
      this.sendChangeCursorPos(conn, event);
    });
  }
  sendChangeCursorPos(conn: any, event: any) {
    const message = new Message(
      JSON.stringify(event),
      MessageType.ChangeCursor,
      this.peer.id,
      conn.peer,
      -1
    );
    conn.send(message);
  }

  getAllMessages(): any[] {
    return this.previousChatMessages;
  }

  getCursorChangeInfo(): CursorChangeInfo {
    return this.cursorChangeInfo;
  }

  getReceivedRemoteCrdts(): CRDT[] {
    return this.receivedRemoteCrdts;
  }

  getPeerId(): string {
    return this.peer.id;
  }

  getRoomName(): string {
    return this.roomName;
  }

  getAllPeerIds(): string[] {
    return this.connectionsIAmHolding.map((conn) => conn.peer);
  }

  getMessagesToBeAck(): any[] {
    return this.messagesToBeAcknowledged;
  }

  private subscribeToEditorServiceEvents() {
    this.editorService.crdtEvent.subscribe((insert: boolean) => {
      if (insert) {
        this.broadcastInsertOrRemove(
          this.editorService.getCrdtsToTransfer(),
          true
        );
      } else {
        this.broadcastInsertOrRemove(
          this.editorService.getCrdtsToTransfer(),
          false
        );
      }
    });
  }
}
