const express = require('express');
const router = express.Router();

const purchaseModel = require('../models/purchase.js');


const {authToken} = require('../utils/auth.util');

router.post('/makePurchase', async(req,res) => {
    console.log('makepurchase');
    console.log(req.body);
    let newPurchase = new purchaseModel({itemList: req.body.itemList, user: req.body.user, deliveryAdress: req.body.deliveryAdress})
    let response = await newPurchase.save();
    console.log('saved!');
    res.send(response);

})

router.get('/getPurchaseList', authToken, async(req,res) => {
    console.log('getpurchase');
})

module.exports = router;