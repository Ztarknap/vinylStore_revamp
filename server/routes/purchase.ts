const express = require('express');
const router = express.Router();

const purchaseModel = require('../models/purchase.ts');
const itemModel = require('../models/item.ts')
 

const {authToken} = require('../utils/auth.util.ts');

type PurchaseType = {
    itemList: string[],
    _id: string,
    deliveryAdress: string
}
 
 
router.post('/makePurchase', async(req:any,res:any) => {
    try {
        console.log('req ', req.body);
        let newPurchase = new purchaseModel({itemList: req.body.itemList, user_id: req.body.id, deliveryAdress: req.body.deliveryAdress})
        let response = await newPurchase.save();
        res.send(
            {
                status: 0,
                message: "Confirmed",
            }
        )
    }
    catch(err) {
        console.log('err', err);
        res.send(
            {
                status: 1,
                message: "Purchase error",
            }
        )
    }
})
 
router.get('/getPurchaseList', authToken, async(req:any,res:any) => {
 
    let purchaseList =  await purchaseModel.find({user_id: req.body.id});
 
    let purchaseListOutput = await Promise.all(purchaseList.map(async (currentPurchase:PurchaseType) => {
        let itemList = await Promise.all(currentPurchase.itemList.map(async(item_id:string) => {
            let itemName = await itemModel.findById(item_id);
 
            return itemName.name;
        }));
        
        let purchaseObj= {
            id: currentPurchase._id,
            itemList: itemList,
            deliveryAdress: currentPurchase.deliveryAdress != ''? currentPurchase.deliveryAdress: 'None',

        }
      
        return purchaseObj;
        
    }));
    res.send({
        status: 0,
        message: "Success",
        purchaseList: purchaseListOutput
    })

}) 

module.exports = router;