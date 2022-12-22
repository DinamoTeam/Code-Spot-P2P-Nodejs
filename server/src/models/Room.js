const { model, Schema } = require('mongoose');

const roomSchema = new Schema({
    roomName: String,
    createdAt: {
        type: Number,
        default: () => Date.now(),
    },
});

module.exports = model('Room', roomSchema);