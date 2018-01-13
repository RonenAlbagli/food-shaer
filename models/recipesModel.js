const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const mongooseUniqueValidator = require('mongoose-unique-validator');

const recipesSchema = new Schema({
    title: {type:String},
    description:  {type:String},
    ingredients:[ {
        ingredient : {type:String},
        amount: {type: String}
    }],
    instructions : {type: String},
    image :  {type:String },
    // video :  {type:String},
})
// recipesSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Recipes', recipesSchema);