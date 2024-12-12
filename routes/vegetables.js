const express = require('express');
const router = express.Router();
const Vegetable = require('../data/vegetables');

// INDEX
// this is called an index route, where you can see all of the data
// THIS is one version of READ
// READ many
// this is only practical when you have small amounts of data
// but you you can also use an index route and limit the number of responses

router.get('/', (req, res) => {
    res.render('vegetables/index', { vegetables: Vegetable });
})

// N - NEW - allows a user to input a new vegetable
router.get('/new', (req, res) => {
    // the 'vegetables/New' in the render needs to be pointing to something in my views folder
    res.render('vegetables/New');
})

// DELETE
router.delete('/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < Vegetable.length) {
        Vegetable.splice(req.params.id, 1);
        res.json(Vegetable);
    } else {
        res.send('<p>That is not a valid id</p>')
    }
})

// UPDATE
// put replaces a resource
router.put('/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < Vegetable.length) {
        // put takes the request body and replaces the entire database entry with it
        // find the id and replace the entire thing with the req.body
        if (req.body.isItFresh === 'on') { // if checked, req.body.isItFresh is set to 'on'
            req.body.isItFresh = true;
        } else { // if not checked, req.body.isItFresh is undefined
            req.body.isItFresh = false;
        }
        Vegetable[req.params.id] = req.body;
        res.json(Vegetable[req.params.id]);
    } else {
        res.send('<p>That is not a valid id</p>')
    }

})

// patch updates part of it
router.patch('/:id', (req, res) => {
    if (req.params.id >= 0 && req.params.id < Vegetable.length) {
        // find the id and replace only the new properties
        console.log(Vegetable[req.params.id]);
        console.log(req.body)
        const newVegetable = { ...Vegetable[req.params.id], ...req.body }
        Meat[req.params.id] = newVegetable;
        res.json(Vegetable[req.params.id]);
    } else {
        res.send('<p>That is not a valid id</p>')
    }
})

// CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    // you should check this when you first start, but then get rid of this console.log
    // console.log(req.body);
    // need to add logic to change the check or not checked to true or false
    if (req.body.isItFresh === 'on') { // if checked, req.body.isItFresh is set to 'on'
        req.body.isItFresh = true;
    } else { // if not checked, req.body.isItFresh is undefined
        req.body.isItFresh = false;
    }
    Vegetable.push(req.body)
    // res.send('this was the post route');
    res.json(Vegetable);
})

// EDIT

router.get('/:id/Edit', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < Vegetable.length) {
        res.render('vegetables/Edit', { vegetable: Vegetable[id], id });
    } else {
        res.status(404).send('<p>That is not a valid id</p>');
    }
});


// SHOW
router.get('/:id', (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < Vegetable.length) {
        res.render('vegetables/Show', { vegetable: Vegetable[id], id });
    } else {
        res.status(404).send('<p>That is not a valid id</p>');
    }
});


module.exports = router;