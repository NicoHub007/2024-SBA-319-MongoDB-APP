const express = require('express');
const router = express.Router();
const Vegetable = require('../models/vegetables');

// // Seed route
// router.get('/seed', async (req, res) => {
//     try {
//         await Vegetable.create([
//             {
//                 name: 'cauliflower',
//                 color: 'white',
//                 image: '/images/vegetables/cauliflower.jpg',
//                 isItFresh: false,
//             },
//             {
//                 name: 'collard greens',
//                 color: 'yellow',
//                 image: '/images/vegetables/collard.jpg',
//                 isItFresh: true,
//             },
//             {
//                 name: 'broccoli',
//                 color: 'green',
//                 image: '/images/vegetables/broccoli.jpg',
//                 isItFresh: false
//             },
//             {
//                 name: 'carrots',
//                 color: 'orange',
//                 image: '/images/vegetables/carrots.jpg',
//                 isItFresh: false,
//             },
//             {
//                 name: 'beetroots',
//                 color: 'red',
//                 image: '/images/vegetables/beetroot.jpg',
//                 isItFresh: false,
//             },
//         ]);
//         res.status(200).redirect('/api/vegetables');
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

//Index
// router.get('/', async (req, res) => {
//     try {
//         const vegetables = await Vegetable.find({});
//         res.status(200).json(vegetables);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

// Index Route - GET all vegetables
router.get('/', async (req, res) => {
    try {
        const vegetables = await Vegetable.find(); // Fetch drinks from MongoDB
        res.render('vegetables/index', { vegetables }); // Render drinks/index view
    } catch (error) {
        console.error("Error fetching vegetables:", error);
        res.status(500).send("Internal Server Error");
    }
});

// New
router.get('/new', (req, res) => {
    res.render('vegetables/New');
});

// Create
router.post('/', async (req, res) => {
    try {
        const createdVegetable = await Vegetable.create(req.body);
        res.status(200).redirect('/api/vegetables');
    } catch (err) {
        res.status(400).send(err);
    }
});

// Edit
router.get('/:id/edit', async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findById(req.params.id);
        res.render('vegetables/Edit', { vegetable: foundVegetable });
    } catch (err) {
        res.status(400).send(err);
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const updatedVegetable = await Vegetable.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect(`/api/vegetables/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        await Vegetable.findByIdAndDelete(req.params.id);
        res.status(200).redirect('/api/vegetables');
    } catch (err) {
        res.status(400).send(err);
    }
});

// Show
router.get('/:id', async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findById(req.params.id);
        res.render('vegetables/Show', { vegetable: foundVegetable }); 
    } catch (err) {
        res.status(400).send(err);
    }
});


module.exports = router;
