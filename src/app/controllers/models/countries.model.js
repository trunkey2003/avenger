const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Country = new Schema({
    name: {type : String},
    code: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});


module.exports = mongoose.model('Country', Country);
