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
    console.log(req.session.user);
    res.send(await Reservation.find({}).populate('ReserveeId', '_id Name Role').exec());

});

module.exports = router;