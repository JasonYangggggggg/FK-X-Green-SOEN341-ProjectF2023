const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Password: { type : String, required: true, trim: true },
    Role: { type : String, required: true, trim: true, default: 'user' }
     
}, {
    timestamps : true
});

userSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('Password')){
        user.Password = await bcrypt.hash(user.Password, 8);
    }
    next();
});


const User = mongoose.model('User', userSchema);
module.exports = User;
