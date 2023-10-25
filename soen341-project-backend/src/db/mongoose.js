const mongoose = require('mongoose');

const client = mongoose.connect('mongodb://127.0.0.1:27017/Realestate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = client;