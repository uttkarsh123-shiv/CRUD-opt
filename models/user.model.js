const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        public_id :{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        }
    },
},{timestamps:true});
const User = mongoose.model('user', userSchema);
module.exports = User;