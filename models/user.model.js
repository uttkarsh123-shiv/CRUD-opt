const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        public_id:String,
        url:string,
    },
});
const User = mongoose.model('User', userSchema);
module.exports = User;