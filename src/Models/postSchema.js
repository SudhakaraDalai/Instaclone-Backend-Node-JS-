const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name : {
        type: String,
        required : true
    },

    location : {
        type: String,
        required: true
    },

    likes: Number,


    description : {
        type: String,
        required: true
    },

    PostImage :  {
        data : Buffer,
        contentType: String
     },

     date : {
        type: String
       
    }

})

module.exports = mongoose.model('Post', PostSchema)