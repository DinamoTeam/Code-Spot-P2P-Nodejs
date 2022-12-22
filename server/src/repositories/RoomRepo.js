const Room = require('../models/Room');

const insert = async (roomName) => {
    try {
        return await Room.create({ roomName });
    } catch (error) {
        console.error(error);
    }
}

const remove = async (roomName) => {
    try {
        return await Room.findOneAndRemove({ roomName });
    } catch (error) {
        console.error(error);
    }
}

const findByName = async (roomName) => {
    try {
        return await Room.findOne({ roomName });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    insert,
    remove,
    findByName,
}