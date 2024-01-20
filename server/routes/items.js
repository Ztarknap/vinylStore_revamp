const express = require('express');
const router = express.Router();

const itemModel = require('../models/item.js');

router.get('/', async (req,res) => {
    console.log('items');
    let items = await itemModel.find({});
    console.log(items);
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



/*router.get('/search/:id', async (req,res) => {
    console.log(req);
     
})
*/
router.post('/create', async (req, res) => {
    console.log('post');
    console.log(req.body);
    let newItem = new itemModel({name: req.body.name, band:req.body.band});
    let response = await newItem.save();
    console.log('saved!');
    res.send(response);
    
    
})


module.exports = router;