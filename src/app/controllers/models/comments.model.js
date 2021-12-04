const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slug = require('mongoose-slug-generator');
// mongoose.plugin(slug);

const Reply = new Schema({
    name: {type : String, default: 'name'},
    time: {type: Date, default: Date.now},
    avatar: {type: String, default: "/img/TEAM/Superhero Avatars/Avengers/Iron Man-01.png"},
    location: {type: String},
    reply: {type: String, required: true},
});

const Comment = new Schema({
    name: {type : String, default: 'name'},
    time: {type: Date, default: Date.now},
    avatar: {type: String, default: "/img/TEAM/Superhero Avatars/Avengers/Iron Man-01.png"},
    location: {type: String},
    comment: {type: String, required: true},
    likes: {type: Number, default: 0},
    age: {type:Number},
    replies: [Reply],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    deletedAt: {type: Date, default: null},
});

module.exports = mongoose.model('Comment', Comment);

