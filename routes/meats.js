const express = require('express');
const router = express.Router();
const Meat = require('../models/meats');

// // Seed route
// router.get('/seed', async (req, res) => {
//     try {
//         await Meat.create([
//             {
//                 name: 'chicken',
//                 cut: 'whole',
//                 quality: 'choice',
//                 image: '/images/meats/wholechicken.jpg',
//                 isItFresh: false,
//             },
//             {
//                 name: 'beef',
//                 cut: 'chuck',
//                 quality: 'prime',
//                 image: '/images/meats/beefchuck.jpg',
//                 isItFresh: true,
//             },
//             {
//                 name: 'lamb',
//                 cut: 'rib chop',
//                 quality: 'choice',
//                 image: '/images/meats/lamb.jpg',
//                 isItFresh: false
//             },
//             {
//                 name: 'pork',
//                 cut: 'back rib',
//                 quality: 'select',
//                 image: '/images/meats/porkrib.jpg',
//                 isItFresh: true,
//             },
//             {
//                 name: 'turkey',
//                 cut: 'breast',
//                 quality: 'choice',
//                 image: '/images/meats/turkeybreast.jpg',
//                 isItFresh: false,
//             },
//             {
//                 name: 'duck',
//                 cut: 'wings',
//                 quality: 'select',
//                 image: '/images/meats/duckwing.jpg',
//                 isItFresh: true,
//             },
//             {
//                 name: 'shrimp',
//                 cut: 'punch',
//                 quality: 'choice',
//                 image: '/images/meats/shrimp.jpg',
//                 isItFresh: true,
//             },
//             {
//                 name: 'tilapia',
//                 cut: 'fillet',
//                 quality: 'choice',
//                 image: '/images/meats/fillet-tilapia.jpg',
//                 isItFresh: true,
//             },
//             {
//                 name: 'salmon',
//                 cut: 'fillet',
//                 quality: 'choice',
//                 image: '/images/meats/fillet-salmon.jpg',
//                 isItFresh: true,
//             },
//             {
//                 name: 'tuna',
//                 cut: 'fillet',
//                 quality: 'choice',
//                 image: '/images/meats/fillet-tuna.jpg',
//                 isItFresh: true,
//             },
//             {
//                 name: 'polish sausage',
//                 cut: 'ground',
//                 quality: 'choice',
//                 image: '/images/meats/polish-sausage.jpg',
//                 isItFresh: false,
//             }
//         ]);
//         res.status(200).redirect('/api/meats');
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

// // Index
// router.get('/', async (req, res) => {
//     try {
//         const meats = await Meat.find({});
//         res.status(200).json(meats);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

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
        res.render('vegetables/Show', { meat: foundMeat });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
