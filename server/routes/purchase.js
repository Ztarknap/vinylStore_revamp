const express = require('express');
const router = express.Router();

const purchaseModel = require('../models/purchase.js');


router.post('/makePurchase', async(req,res) => {
    console.log('makepurchase');
    console.log(req.body);
    let newPurchase = new purchaseModel({itemList: req.body.itemList, user: req.body.user, deliveryAdress: req.body.deliveryAdress})
    let response = await newPurchase.save();
    console.log('saved!');
    res.send(response);

})


module.exports = router;