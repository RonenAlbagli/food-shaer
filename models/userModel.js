const mongoose = require('mongoose');
const schema = mongoose.Schema;
// const mongooseUniqueValidator = require('mongoose-unuque-validator');

const UserSchema = new Schema({
    firstName: {type:String, required: true},
    lastName:  {type:String, required: true},
    password:  {type:String, required: true},
    email :  {type:String, required: true, unique:true},
    post :  {type:Schema.Types.ObjectId , ref: 'Post'},
})

module.exports =mongoose.model('User', UserSchema);