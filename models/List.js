const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemsSchema = require("./Items").schema;


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
        type: Schema.Types.ObjectId,
        ref: "Shop",
        required: true,
    }
});

module.exports = mongoose.model('List', listSchema);