const mongoose = require('mongoose');

const brokerSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    Email: { type: String, required: true },
    LicenseNumber: { type: Number, required: true },
    Agency: { type: String, required: true },
    
}, {
    timestamps : true
});

const Broker = mongoose.model('Broker', brokerSchema);

module.exports = Broker;