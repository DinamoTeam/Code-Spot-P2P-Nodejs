const Peer = require('../models/Peer');

const findByRoomName = async (roomName) => {
    try {
        return await Peer.find({ roomName });
    } catch (error) {
        console.error(error);
    }
}

const insert = async ({ peerId, roomName, hasReceivedAllMessages, cursorColor }) => {
    try {
        return await Peer.create({ peerId, roomName, hasReceivedAllMessages, cursorColor });
    } catch (error) {
        console.error(error);
    }
}

const updateField = async(peerId, fieldName, value) => {
    try {
        return await Peer.updateOne({ peerId }, {
            $set: {
                [fieldName]: value
            }
        })
    } catch (error) {
        console.error(error);
    }
}

const removeById = async(id) => {
    try {
        return await Peer.findByIdAndRemove(id);
    } catch (error) {
        console.error(error);
    }
}

const findByPeerId = async(peerId) => {
    try {
        return await Peer.findOne({ peerId });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    findByRoomName,
    insert,
    updateField,
    removeById,
    findByPeerId,
}