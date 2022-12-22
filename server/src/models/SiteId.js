const { model, Schema } = require('mongoose');

const siteIdSchema = new Schema({
    siteId: Number,
});

module.exports = model('SideId', siteIdSchema);