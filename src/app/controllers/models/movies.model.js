const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema({
    name: {type : String, default: 'movie name'},
    time: {type: String},
    img: {type: String},
    slug: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});


module.exports = mongoose.model('Movie', Movie);
