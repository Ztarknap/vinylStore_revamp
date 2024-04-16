const express = require('express');
const router = express.Router();

const itemModel = require('../models/item.ts');

router.get('/', async (req,res) => {
    let items = await itemModel.find({});
    res.send(items);
})


router.get('/search/',   async (req,res) => {
    const filter = {};
 
    for (const property in req.query) {
        if (req.query[property])
        {
            filter[property] = req.query[property];
        } 
    }
    
    let items = await itemModel.find(filter);
     
    res.send(items);

     
})

router.post('/create', async (req, res) => {
    let newItem = new itemModel({name: req.body.name, band:req.body.band});
    let response = await newItem.save();
    res.send(response);
})


module.exports = router;