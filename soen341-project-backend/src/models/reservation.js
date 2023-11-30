const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const reservationSchema = new mongoose.Schema({
    ReserveeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    BrokerId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
     
}, {
    timestamps : true
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;