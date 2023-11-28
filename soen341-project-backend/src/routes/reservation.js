const Reservation = require('../models/reservation');
const User = require('../models/reservation');

const router = require('express').Router();

router.post('/reserve', async(req,res)=>{
    const reservation = new Reservation(req.body);
    await reservation.save();
    console.log(reservation);
    res.send(true);
});

router.get('/getReservationDetails', async(req,res)=>{
    const reservation = await Reservation.findById(req.query.id);
    const userDetails = await User.findOne({_id: '6563d67d0026e61c04438583'});
    console.log(userDetails)
    res.send({reservation, userDetails});

});

module.exports = router;