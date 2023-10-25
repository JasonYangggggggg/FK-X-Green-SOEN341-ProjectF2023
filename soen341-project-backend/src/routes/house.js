const House = require('../models/house');

const router = require('express').Router();

router.post('/add', async(req,res)=>{
    const house = new House(req.body);
    await house.save();
    console.log(house);
    res.send(true);
});

module.exports = router;