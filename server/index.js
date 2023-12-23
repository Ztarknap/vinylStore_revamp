const express = require("express");
const app = express();


app.get("/api", (req,res) => {
    console.log('/api getNew')
    res.json({message: "API"});
})


app.listen(3001, () =>  {
    console.log('listening on port 3001')
})

 