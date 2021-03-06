const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    // fetch user profile with his user is, the user can be found with passport
    userId: String,
    // the user entered location 'at the desk on the 3rd floor'
    // preciseLocation: String,
    // the location to plot on google maps
    location: String,

    // the location to plot on google maps
    message: String,
    course: String

}, { timestamps: true });

const Ad = mongoose.model('Ad', adSchema);
module.exports = Ad;
