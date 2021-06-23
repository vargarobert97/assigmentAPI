const mongoose = require('mongoose');


const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Items', itemsSchema);