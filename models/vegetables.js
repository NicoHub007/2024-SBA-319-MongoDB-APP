const mongoose = require('mongoose');

// Define the schema for the vegetables
const vegetableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    isItFresh: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true
});

// Create and export the model
const Vegetable = mongoose.model('Vegetable', vegetableSchema);
module.exports = Vegetable;
