const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsxViewEngine = require('jsx-view-engine');
const methodOverride = require('method-override');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

// import db/conn.js works with .mjs files, but we are using .js
const db = require('./db/conn');

// import the meats and vegetables routes that I need
const meatRoutes = require('./routes/meats');
const vegetableRoutes = require('./routes/vegetables');
const drinksRoutes = require('./routes/drinks');

const PORT = process.env.PORT || 5050;

// import the data from the model database files
const Drink = require('./models/drinks');
const Vegetable = require('./models/vegetables');
const Meat = require('./models/meats');

// View engine setup
// set up the view engine to be able to use it
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

// middleware to serve static files from the public folder
app.use('/styles',express.static('public/styles'));
app.use('/images', express.static('public/images'));
app.use(express.static(path.join(__dirname, 'public')));

// // route to resize images if necessary by running resizeImg.js script
// app.get('/', (req, res) => {
//     res.send('Image Resizing Server is running...');
// });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});


app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
})

app.use((req, res, next) => {
    const time = new Date();
    console.log(
        `-----
        ${time.toLocaleDateString()}: Received a ${req.method} request to ${req.url}.`
    );

    if (req.body && Object.keys(req.body).length > 0) {
        console.log('Containing the data:');
        console.log(`${JSON.stringify(req.body)}`);
    }
    next();
})

// =========== ROUTES =============
// We are going to create a full CRUD application
// Server-side rendering, you also need the views for someone to input to put or post
// INDUCES
// I - Index    - GET       - READ - display all of the elements
// N - New      - GET       - *  CREATE * but this is a view that allows user inputs
// D - Delete   - DELETE    - DELETE
// U - Update   - PUT       - UPDATE * this updates the data
// C - Create   - POST      - CREATE * this adds new data 
// E - Edit     - GET       - *  UPDATE * but this a view that allows user inputs
// S - Show     - GET       - READ - displays one of the elements

// add in the meats and vegetables routes that were imported
app.use('/api/meats', meatRoutes); 
app.use('/api/vegetables', vegetableRoutes);
app.use('/api/drinks', drinksRoutes);

// ***** BELOW HERE are NON-API routes
// Index - GET
app.get('/vegetables', async (req, res) => {
    try {
        const foundVegetables = await Vegetable.find({});
        res.status(200).render('vegetables/Index', { vegetables: foundVegetables })
    } catch (err) {
        res.send(err).status(400);
    }
})

app.get('/drinks', async (req, res) => {
    try {
        const foundDrinks = await Drink.find({});
        res.status(200).render('drinks/Index', { drinks: foundDrinks })
    } catch (err) {
        res.send(err).status(400);
    }
})

app.get('/meats', async (req, res) => {
    try {
        const foundMeats = await Meat.find({});
        res.status(200).render('meats/Index', { drinks: foundMeats })
    } catch (err) {
        res.send(err).status(400);
    }
})

// ***** ABOVE HERE are NON-API routes

// app.get('/meats', (req, res) => {
//     res.json(meats);
// })

// app.get('/vegetables', (req, res) => {
//    res.json(vegetables);
// })

// app.get('/drinks', (req, res) => {
//     res.json(drinks);
// });

// N - NEW - GET  - *  CREATE * but this is a view that allows user inputs
app.get('/meats/new', (req, res) => {
    res.render('meats/New');
})

app.get('/drinks/new', (req, res) => {
    res.render('drinks/New');
})

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New');
});

//E - EDIT - GET  - *  UPDATE * but this is a view that allows user inputs
app.get('/meats/:id/edit', async (req, res) => {
    try {
        const foundMeat = await Drink.findById(req.params.id);
        res.render('meats/Edit', { meat: foundMeat, id: req.params.id });
    } catch (err) {
        res.status(400).send(err);
    }
})

// E - Edit
app.get('/vegetables/:id/edit', async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findById(req.params.id);
        res.render('vegetables/Edit', { vegetable: foundVegetable, id: req.params.id });
    } catch (err) {
        res.status(400).send(err);
    }
})

app.get('/drinks/:id/edit', async (req, res) => {
    try {
        const foundDrink = await Drink.findById(req.params.id);
        res.render('drinks/Edit', { drink: foundDrink, id: req.params.id });
    } catch (err) {
        res.status(400).send(err);
    }
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
