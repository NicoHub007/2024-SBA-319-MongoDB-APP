const mongoose = require('mongoose');

// Define the schema for the meats
const meatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cut: {
        type: String,
        required: true,
    },
    quality: {
        type: String,
        required: false,
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
const Meat = mongoose.model('Meat', meatSchema);
module.exports = Meat;
