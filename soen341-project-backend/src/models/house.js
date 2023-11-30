const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    Type: { type: String, required: true },
    City: { type: String, required: true },
    Price: { type: Number, required: true },
    Image: {
        data: { type: mongoose.Schema.Types.Buffer },
        contentType: { type: String }
    },
    BrokerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
});

const House = mongoose.model('House', houseSchema);

module.exports = House;
