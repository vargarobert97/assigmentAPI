const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Items: {

    },
    Shop: {
        
    }
});

module.exports = mongoose.model('List', listSchema);