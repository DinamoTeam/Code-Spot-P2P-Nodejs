import { Injectable } from '@angular/core';
import { NameService } from './name.service';

@Injectable({
  providedIn: 'root',
})
export class CursorService {
  private cursorDecorations: Decoration[] = [];
  private selectionDecorations: Decoration[] = [];
  // Color: 1 to 25
  private peerColors: Map<string, number> = new Map<string, number>();
  private oldNameTags: Map<string, any> = new Map<string, any>();
  private otherPeerNameTagIndices = new Map<string, number>();
  private myPeerId: string;
  private myLastCursorEvent: any = null;
  private myLastSelectEvent: any = null;
  private contentWidgetId = 0;
  private showNameTag = true;
  justJoinRoom = true;
  peerIdsNeverSendCursorTo = new Set<string>();

  constructor(private nameService: NameService) {}

  drawCursor(editor: any, line: number, col: number, ofPeerId: string) {
    const peerName = this.nameService.getPeerName(ofPeerId);
    const color = this.peerColors.get(ofPeerId);
    const deco = this.cursorDecorations.filter((d) => d.peerId === ofPeerId);
    const oldDecoration = deco.map((d) => d.decoration);
    const decoration = editor.deltaDecorations(
      oldDecoration, // Remove old deco
      [
        {
          range: new monaco.Range(line, col, line, col + 1),
          options: {
            className: 'monaco-cursor-' + color,
            stickiness: 1,
            hoverMessage: { value: peerName },
          },
        },
      ]
    );
    this.cursorDecorations = this.cursorDecorations.filter(
      (d) => d.peerId !== ofPeerId
    );
    this.cursorDecorations.push(new Decoration(decoration, ofPeerId));
  }

  drawSelection(
    editor: any,
    startLine: number,
    startCol: number,
    endLine: number,
    endCol: number,
    ofPeerId: string
  ) {
    const peerName = this.nameService.getPeerName(ofPeerId);
    const color = this.peerColors.get(ofPeerId);
    const deco = this.selectionDecorations.filter((d) => d.peerId === ofPeerId);
    const oldDecoration = deco.map((d) => d.decoration);
    const decoration = editor.deltaDecorations(oldDecoration, [
      {
        range: new monaco.Range(startLine, startCol, endLine, endCol),
        options: {
          className: 'monaco-select-' + color,
          stickiness: 3
        },
      },
    ]);
    this.selectionDecorations = this.selectionDecorations.filter(
      (d) => d.peerId !== ofPeerId
    );
    this.cursorDecorations.push(new Decoration(decoration, ofPeerId));
  }

  drawNameTag(
    editor: any,
    ofPeerId: string,
    newLineNumber: number,
    newColumn: number,
    isMyNameTag: boolean
  ) {
    const oldNameTag = this.oldNameTags.get(ofPeerId);

    if (oldNameTag) {
      editor.removeContentWidget(oldNameTag);
    }
    const nameTagOwner = this.nameService.getPeerName(ofPeerId);
    const nameTagColor = this.peerColors.get(ofPeerId);

    const contentWidgetId = this.contentWidgetId++ + '';
    const showTag = this.showNameTag;
    const newNameTagWidget = {
      domNode: null,
      getId: function () {
        return contentWidgetId;
      },
      getDomNode: function () {
        if (!this.domNode) {
          this.domNode = document.createElement('div');
          this.domNode.textContent = nameTagOwner;
          this.domNode.style.whiteSpace = 'nowrap';
          this.domNode.style.background = 'var(--monaco-color-' + nameTagColor + ')';
          this.domNode.classList.add('nameTagText');
          if (!showTag) {
            this.domNode.classList.add('hide');
          }
        }
        return this.domNode;
      },
      getPosition: function () {
        return {
          position: {
            lineNumber: newLineNumber,
            column: newColumn,
          },
          preference: [monaco.editor.ContentWidgetPositionPreference.ABOVE],
        };
      },
    };
    editor.addContentWidget(newNameTagWidget);
    this.oldNameTags.set(ofPeerId, newNameTagWidget);

    // "My name tag" is updated differently (matching "my cursor")
    if (!isMyNameTag) {
      const index = editor
        .getModel()
        .getOffsetAt(new monaco.Position(newLineNumber, newColumn));
      this.otherPeerNameTagIndices.set(ofPeerId, index);
    }
  }

  hideAllNameTags() {
    const nameTags = Array.from(this.oldNameTags.values());
    for (let i = 0; i < nameTags.length; i++) {
      const nameTag = nameTags[i];
      nameTag.domNode.classList.add('hide');
    }
    this.showNameTag = false;
  }

  showAllNameTags() {
    const nameTags = Array.from(this.oldNameTags.values());
    for (let i = 0; i < nameTags.length; i++) {
      const nameTag = nameTags[i];
      nameTag.domNode.classList.remove('hide');
    }
    this.showNameTag = true;
  }

  nameTagIndexAfterInsert(
    originalIndex: number,
    insertStartIndex: number,
    insertLength: number
  ) {
    if (originalIndex < insertStartIndex) {
      return originalIndex;
    } else {
      return originalIndex + insertLength;
    }
  }

  nameTagIndexAfterRemove(
    originalIndex: number,
    removeStartIndex: number,
    removeLength: number
  ) {
    if (removeStartIndex >= originalIndex) {
      return originalIndex;
    } else {
      return Math.max(removeStartIndex, originalIndex - removeLength);
    }
  }

  recalculateAllNameTagIndicesAfterInsert(
    insertStartIndex: number,
    insertLength: number
  ): void {
    console.log('Calculating - startIndex: ' + insertStartIndex + ', insertLength: ' + insertLength);
    const peerIds = Array.from(this.otherPeerNameTagIndices.keys());
    for (let i = 0; i < peerIds.length; i++) {
      const peerId = peerIds[i];
      if (!peerId) {
        console.error('PeerId undefined! What happened?!');
      }
      const oldIndex = this.otherPeerNameTagIndices.get(peerId);
      const newIndex = this.nameTagIndexAfterInsert(
        this.otherPeerNameTagIndices.get(peerId),
        insertStartIndex,
        insertLength
      );
      this.otherPeerNameTagIndices.set(peerId, newIndex);
      console.log('PeerId: ' + peerId + ', oldIndex: ' + oldIndex + ', newIndex: ' + newIndex);
    }
  }

  recalculateAllNameTagIndicesAfterRemove(
    removeStartIndex: number,
    removeLength: number
  ): void {
    const peerIds = Array.from(this.otherPeerNameTagIndices.keys());
    for (let i = 0; i < peerIds.length; i++) {
      const peerId = peerIds[i];
      if (!peerId) {
        console.error('PeerId undefined! What happened?!');
      }
      const newIndex = this.nameTagIndexAfterRemove(
        this.otherPeerNameTagIndices.get(peerId),
        removeStartIndex,
        removeLength
      );
      this.otherPeerNameTagIndices.set(peerId, newIndex);
    }
  }

  redrawAllNameTags(editor: any): void {
    this.otherPeerNameTagIndices.forEach((index: number, peerId: string) => {
      const pos = editor.getModel().getPositionAt(index);
      this.drawNameTag(editor, peerId, pos.lineNumber, pos.column, false);
    });
  }

  setPeerColor(peerId: string, color: number): void {
    this.peerColors.set(peerId, color);
  }

  removePeer(editor: any, peerId: string): void {
    this.peerColors.delete(peerId);

    const cursorDecoration = this.cursorDecorations
      .filter((d) => d.peerId === peerId)
      .map((d) => d.decoration);
    const selectDecoration = this.cursorDecorations
      .filter((d) => d.peerId === peerId)
      .map((d) => d.decoration);
    editor.deltaDecorations(cursorDecoration, []);
    editor.deltaDecorations(selectDecoration, []);

    const oldNameTag = this.oldNameTags.get(peerId);
    if (oldNameTag) {
      editor.removeContentWidget(oldNameTag);
      this.oldNameTags.delete(peerId);
      this.otherPeerNameTagIndices.delete(peerId);
    }
  }

  getPeerColor(peerId: string): number {
    return this.peerColors.get(peerId);
  }

  getMyCursorColor(): number {
    return this.peerColors.get(this.myPeerId);
  }

  setMyCursorColorAndPeerId(myPeerId: string, color: number): void {
    this.setPeerColor(myPeerId, color);
    this.myPeerId = myPeerId;
  }

  getMyLastCursorEvent(): any {
    return this.myLastCursorEvent;
  }

  setMyLastCursorEvent(event: any): void {
    this.myLastCursorEvent = event;
  }

  getMyLastSelectEvent(): any {
    return this.myLastSelectEvent;
  }

  setMyLastSelectEvent(event: any): void {
    this.myLastSelectEvent = event;
  }

}

class Decoration {
  decoration: any;
  peerId: string;
  constructor(decoration: any, peerId: string) {
    this.decoration = decoration;
    this.peerId = peerId;
  }
}
