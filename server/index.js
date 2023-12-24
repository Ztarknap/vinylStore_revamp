const express = require("express");
const path = require('path');

const mongoose = require('mongoose');
const itemModel = require('./models/item.js');
const itemRoute = require('./routes/items.js');

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use('/api/items', itemRoute);


app.get("/api", (req,res) => {
    console.log('/api getNew')
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