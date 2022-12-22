const express = require("express");
const roomsRoutes = express.Router();
const { v4: uuidv4 } = require('uuid');
const roomRepo = require('../repositories/RoomRepo'); 
const peerRepo = require('../repositories/PeerRepo');
const siteIdRepo = require('../repositories/SiteIdRepo');

// GET: api/Room/GetPeerIdsInRoom?roomName=abc
roomsRoutes.route("/api/Room/GetPeerIdsInRoom").get(async function (req, res) {
    try {
        const roomName = req.query.roomName;
        const isRoomExist = !!(await roomRepo.findByName(roomName));

        if (!isRoomExist) {
            return res.json({});
        }

        const peers = await peerRepo.findByRoomName(roomName);
        const peerIds = peers.map(peer => peer.peerId);
        res.json({ peerIds });
    } catch (error) {
        console.error(error);
        res.status(500).json({errorMessage: 'Something went wrong with the server'});
    }
});

// GET: api/Room/JoinNewRoom?peerId=abc
roomsRoutes.route("/api/Room/JoinNewRoom").get(async function (req, res) {
    try {
        const peerId = req.query.peerId;
        const roomName = uuidv4();
        const cursorColor = getRandom(1, 25) + 1;

        await roomRepo.insert(roomName);
        await peerRepo.insert({
            peerId,
            roomName,
            hasReceivedAllMessages: 1,
            cursorColor,
        })

        const siteId = await siteIdRepo.getCurrentSiteIdAndIncrement();

        const info = {
            siteId: siteId.siteId,
            roomName,
            cursorColor,
            peerIds: [],
            hasReceivedAllMessages: [],
            cursorColors: [],
        };

        return res.json(info);
    } catch (error) {
        console.error(error);
        res.status(500).json({errorMessage: 'Something went wrong with the server'});   
    }
    
});

// Get: api/Room/JoinExistingRoom?peerId=abc&roomName=def
roomsRoutes.route("/api/Room/JoinExistingRoom").get(async function (req, res) {
    try {
        const peerId = req.query.peerId;
        const roomName = req.query.roomName;
        const isRoomExist = !!(await roomRepo.findByName(roomName));

        if (!isRoomExist) {
            const info = {
                siteId: -1,
                roomName: null,
                cursorColor: -1,
                peerIds: null,
                hasReceivedAllMessages: null,
                cursorColors: null,
            };

            return res.json(info);
        }

        const peers = await peerRepo.findByRoomName(roomName);
        const peerIds = peers.map(peer => peer.peerId);
        const hasReceivedAllMessagesList = peers.map(peer => peer.hasReceivedAllMessages);
        const cursorColorList = peers.map(peer => peer.cursorColor);

        const randomColor = await getAvailableCursorColor(cursorColorList);
        const siteId = await siteIdRepo.getCurrentSiteIdAndIncrement();

        await peerRepo.insert({
            peerId,
            roomName,
            hasReceivedAllMessages: 0,
            cursorColor: randomColor,
        });

        const info = {
            siteId: siteId.siteId,
            roomName,
            cursorColor: randomColor,
            peerIds,
            hasReceivedAllMessages: hasReceivedAllMessagesList,
            cursorColors: cursorColorList,
        };

        return res.json(info);
    } catch (error) {
        console.error(error);
        res.status(500).json({errorMessage: 'Something went wrong with the server'}); 
    }
});

// Post: api/Room/MarkPeerReceivedAllMessages
roomsRoutes.route("/api/Room/MarkPeerReceivedAllMessages").post(async function (req, res) {
    try {
        const peerId = req.body.val;
        await peerRepo.updateField(peerId, 'hasReceivedAllMessages', 1);
        res.json({});
    } catch (error) {
        console.error(error);
        res.status(500).json({errorMessage: 'Something went wrong with the server'}); 
    }
});

// Delete: api/Room/DeletePeer/abc
roomsRoutes.route("/api/Room/DeletePeer/:peerId").delete(async function (req, res) {
    try {
        const peerId = req.params.peerId;
        const peer = await peerRepo.findByPeerId(peerId);

        if (!peer) {
            return res.json({});
        }

        await peerRepo.removeById(peer._id);
        const peers = await peerRepo.findByRoomName(peer.roomName);
        const nobodyInRoom = peers.length === 0;
        if (nobodyInRoom) {
            await roomRepo.remove(peer.roomName);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({errorMessage: 'Something went wrong with the server'}); 
    }
});

async function getAvailableCursorColor(chosenColors) {
    let randomColor = getRandom(1, 25) + 1;
    if (chosenColors.length >= 25) {
        return randomColor;
    }

    while (chosenColors.includes(randomColor)) {
        randomColor = getRandom(1, 25) + 1;
    }

    return randomColor;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = roomsRoutes;
