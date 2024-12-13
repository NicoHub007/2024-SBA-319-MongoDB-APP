const express = require('express');
const router = express.Router();
const Meat = require('../models/meats');

// Index Route - GET all meats
router.get('/', async (req, res) => {
    try {
        const meats = await Meat.find(); // Fetch drinks from MongoDB
        res.render('meats/index', { meats }); // Render drinks/index view
    } catch (error) {
        console.error("Error fetching meats:", error);
        res.status(500).send("Internal Server Error");
    }
});

// New
router.get('/new', (req, res) => {
    res.render('meats/New');
});

// Create
router.post('/', async (req, res) => {
    try {
        const createdMeat = await Meat.create(req.body);
        res.status(200).redirect('/api/meats');
    } catch (err) {
        res.status(400).send(err);
    }
});

// Edit
router.get('/:id/edit', async (req, res) => {
    try {
        const foundMeat = await Meat.findById(req.params.id);
        res.render('meats/Edit', { meat: foundMeat });
    } catch (err) {
        res.status(400).send(err);
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const updatedMeat = await Meat.findByIdAndUpdate(
            req.params.id, req.body, { new: true });
        res.redirect(`/api/meats/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        await Meat.findByIdAndDelete(req.params.id);
        res.status(200).redirect('/api/meats');
    } catch (err) {
        res.status(400).send(err);
    }
});

// Show
router.get('/:id', async (req, res) => {
    try {
        const foundMeat = await Meat.findById(req.params.id);
        res.render('meats/Show', { meat: foundMeat });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
