const express = require('express');
const router = express.Router();

const purchaseModel = require('../models/purchase.js');


const {authToken} = require('../utils/auth.util');

router.post('/makePurchase', async(req,res) => {
    console.log('makepurchase');
    try {
        let newPurchase = new purchaseModel({itemList: req.body.itemList, user_id: req.body.id, deliveryAdress: req.body.deliveryAdress})
        let response = await newPurchase.save();
        console.log('saved! ', newPurchase);
        res.send(
            {
                status: 0,
                message: "Confirmed",
            }
        )
    }
    catch {
        res.send(
            {
                status: 1,
                message: "Purchase error",
            }
        )
    }
})

router.get('/getPurchaseList', authToken, async(req,res) => {
    console.log('getpurchase');
    let purchaseList =  await purchaseModel.find({user_id: req.body.id});
    res.send({
        status: 0,
        message: "Success",
        purchaseList: purchaseList
    })

})

module.exports = router;