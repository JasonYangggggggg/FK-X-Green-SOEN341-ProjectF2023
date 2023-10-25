const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    Type: { type: String, required: true },
    City: { type: String, required: true },
    Price: { type: Number, required: true },
    ImgBuffer: { type: mongoose.Schema.Types.Buffer },
    ImgContentType: { type : String } 
}, {
    timestamps : true
});

const House = mongoose.model('House', houseSchema);

module.exports = House;