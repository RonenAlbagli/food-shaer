const mongoose = require('mongoose');
const schema = mongoose.Schema;
const validator = require('validator');
// const mongooseUniqueValidator = require('mongoose-unuque-validator');

// const UserSchema = new Schema({
//     firstName: {type:String, required: true},
//     lastName:  {type:String, required: true},
//     password:  {type:String, required: true},
//     email :  {type:String, required: true, unique:true},
//     post :  {type:Schema.Types.ObjectId , ref: 'Post'},
// })


const UserSchema = new schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        unique:true,
        validate:{
            validator : validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    }
    // tokens: [{
    //     access: {
    //         type: String,
    //         required:true
    //     },
    //     token: {
    //         type: String,
    //         required:true
    //     }
    // }]
})
module.exports = mongoose.model('User', UserSchema);