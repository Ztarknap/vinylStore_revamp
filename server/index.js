const express = require("express");
const path = require('path');

const mongoose = require('mongoose');

const itemRoute = require('./routes/items.js');
const purchaseRoute = require('./routes/purchase.js')
const userRoute = require('./routes/user.js')

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use('/api/items', itemRoute);
app.use('/api/purchase', purchaseRoute);
app.use('/api/user', userRoute)

app.get("/api", (req,res) => {
    res.json({message: "API"});
})

app.listen(3001, () =>  {
    console.log('listening on port 3001')
})


mongoose.connect('mongodb://127.0.0.1:27017/vinylStore').then(() => {
    console.log('connected');
}).catch(err=> {
    console.log('err ', err);
})