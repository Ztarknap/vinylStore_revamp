const express = require('express');
const router = express.Router();

const purchaseModel = require('../models/purchase.js');


router.post('/makePurchase', async(req,res) => {
    console.log('makepurchase');
    
})


module.exports = router;