const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {

    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Items', itemsSchema);