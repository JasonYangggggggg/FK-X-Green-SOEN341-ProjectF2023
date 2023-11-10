const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = require('express').Router();

router.post('/signup', async(req,res)=>{
    const user = new User(req.body);
    await user.save();
    console.log(user);
    res.send(true);
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ Name: req.body.Name });
      
        if (!user) {
            console.log('not found');
            return res.send(false)
        }
        const check = await bcrypt.compare(req.body.Password,user.Password);
        if(!check){
            console.log('incorrect pass');
            return res.send(false);
        }
        console.log('authenticated');
        res.send(true);
        
        
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;