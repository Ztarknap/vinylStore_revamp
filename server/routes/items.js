const express = require('express');
const router = express.Router();

const itemModel = require('../models/item.js');

router.get('/', async (req,res) => {
    console.log('items');
    let items = await itemModel.find({});
    console.log(items);
    res.send(items);
})


router.get('/:genre/:name/:band', async (req,res) => {
    console.log('search ', req.body);
    res.send('got query');
})



router.get('/search/:id', async (req,res) => {
    let id = req.params.id;
    let item = await itemModel.findById(_id = id);
    res.send(item);
})

router.post('/create', async (req, res) => {
    console.log('post');
    console.log(req.body);
    let newItem = new itemModel({name: req.body.name, band:req.body.band});
    let response = await newItem.save();
    console.log('saved!');
    res.send(response);
    
    
})


module.exports = router;