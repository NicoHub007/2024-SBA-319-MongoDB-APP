const mongoose = require('mongoose');

// Define the schema for the drinks
const drinkSchema = new mongoose.Schema({
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
    caffeine: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true 
});

// Create and export the model
const Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink;
