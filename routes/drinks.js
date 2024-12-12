const express = require('express');
const router = express.Router();
const Drink = require('../models/drinks');

// // add a seed route to your routes
// router.get('/seed', async (req, res) => {
//     try {
//         await Drink.create([
//             {
//                 name: 'coffee',
//                 color: 'dark-brown',
//                 image: '/images/drinks/coffee.jpg',
//                 caffeine: false,
//             },
//             {
//                 name: 'cocoa',
//                 color: 'brown',
//                 image: '/images/drinks/cocoa.jpg',
//                 caffeine: true,
//             },
//             {
//                 name: 'water',
//                 color: 'clear',
//                 image: '/images/drinks/water.jpg',
//                 caffeine: false
//             },
//             {
//                 name: 'mellow yellow',
//                 color: 'yellow',
//                 image: '/images/drinks/melyel.jpg',
//                 caffeine: true,
//             },
//             {
//                 name: 'tomato juice',
//                 color: 'orange',
//                 image: '/images/drinks/tomato-juice.jpg',
//                 caffeine: false,
//             },
//             {
//                 name: 'lemonade',
//                 color: 'yellow',
//                 image: '/images/drinks/lemonade.jpg',
//                 caffeine: false,
//             },
//             {
//                 name: 'sprite',
//                 color: 'clear',
//                 image: '/images/drinks/sprite.jpg',
//                 caffeine: true,
//             },
//             {
//                 name: 'energy drinks',
//                 color: 'blue',
//                 image: '/images/drinks/energy-drinks.jpg',
//                 caffeine: true,
//             },
//             {
//                 name: 'green tea',
//                 color: 'light-brown',
//                 image: '/images/drinks/green-tea.jpg',
//                 caffeine: false,
//             },
//             {
//                 name: 'kombucha',
//                 color: 'brown',
//                 image: '/images/drinks/kombucha.jpg',
//                 caffeine: true,
//             },
//             {
//                 name: 'peach lemonade',
//                 color: 'yellow',
//                 image: '/images/drinks/peach-lemonade.jpg',
//                 caffeine: false,
//             }
//         ])
//         res.status(200).redirect('/api/drinks');
//     } catch (err) {
//         res.status(400).send(err);
//     }
// })

// //===== Route for getting all meats ======

// // INDEX
// router.get('/', async (req, res) => {
//     try {
//         const foundDrinks = await Drink.find({});
//         res.status(200).json(foundDrinks);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// })
// Index Route - GET all drinks
router.get('/', async (req, res) => {
    try {
        const drinks = await Drink.find(); // Fetch drinks from MongoDB
        res.render('drinks/index', { drinks}); // Render drinks/index view
    } catch (error) {
        console.error("Error fetching drinks:", error);
        res.status(500).send("Internal Server Error");
    }
});

// N - NEW - allows a user to input a new drink
router.get('/new', (req, res) => {
    // the 'drinks/New' in the render needs to be pointing to something in my views folder
    res.render('drinks/New');
})

// DELETE
router.delete('/:id', async(req, res) => {
    try {
        const deletedDrink = await Drink.findByIdAndDelete(req.params.id);
        console.log(deletedDrink);
        res.status(200).redirect('api/drinks');
    } catch (err) {
        res.status(400).send(err);
    }
})

// UPDATE
// put replaces a resource
router.put('/:id', async (req, res) => {
    if (req.body.caffeine === 'on') { // if checked, req.body.caffeine is set to 'on'
        req.body.caffeine = true;
    } else { // if not checked, req.caffeine is undefined
        req.body.caffeine = false;
    }
  
    try {
        const updatedDrink = await Drink.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // returns the updated document instead of the original
        )
        console.log(updatedDrink)
        res.redirect(`/api/drinks/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})

// CREATE
router.post('/', async(req, res) => {
    if (req.body.caffeine == 'on') {
        req.body.caffeine = true;
    } else {
        req.body.caffeine = false;
    }

    try {
        const createdDrink = await Drink.create(req.body);
        res.status(200).redirect('api/drinks');
    } catch (err) {
        res.status(400).send(err);
    }
}) ;

// EDIT
router.get('/:id/Edit', async (req, res) => {
    try {
        const foundDrink = await Drink.findById(req.params.id);
        res.render('drinks/Edit', { drink: foundDrink, id: req.params.id });
    } catch (err) {
        res.status(400).send(err);
    }
});

// SHOW
router.get('/:id', async (req, res) => {
    try {
        const foundDrink = await Drink.findById(req.params.id);
        res.render('drinks/Show', { drink: foundDrink });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;