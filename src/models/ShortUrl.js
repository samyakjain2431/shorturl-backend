const mongoose = require('mongoose');

const ShortUrlSchema = new mongoose.Schema({
    originalUrl : {
        type: String,
        required: true
    },
    generatedUrl : {
        type: String,
        required: true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        // required : true
    },
    qrCode : {
        type : String,
    },
    IsActive : {
        type : Boolean,
        default : true
    },
    expiryDate : {
        type : Date,
        default : null,
    },
    isFavorite : {
        type : Boolean,
        default : false
    },
    collections :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Collection'
    }]
},{timestamps : true})

module.exports = mongoose.model('ShortUrl', ShortUrlSchema);