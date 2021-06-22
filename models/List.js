const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated: {
        type: Date,
        required: true,
        default: Date.now
    },
    Items: [
        itemsSchema
    ],
    Shop: {
        //TODO: Pitaj na daily
    }
});

module.exports = mongoose.model('List', listSchema);