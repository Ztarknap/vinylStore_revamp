const express = require('express');
const router = express.Router();

const purchaseModel = require('../models/purchase.js');


router.post('/makePurchase', async(req,res) => {
    console.log('makepurchase');
    console.log(req.body);
    /*let newItem = new itemModel({name: req.body.name, band:req.body.band});
    let newPurchase = new purchaseModel({itemList: itemList})*/
})


module.exports = router;