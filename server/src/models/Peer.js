const { model, Schema } = require('mongoose');

const peerSchema = new Schema({
    peerId: String,
    roomName: String,
    hasReceivedAllMessages: Number,
    cursorColor: Number,
    createdAt: {
        type: Number,
        default: () => Date.now(),
    },
});

module.exports = model('Peer', peerSchema);