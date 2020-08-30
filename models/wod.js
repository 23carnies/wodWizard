const mongoose = require('mongoose');
const Schema = mongoose.Schema

const wodSchema = new Schema ({
    title: {type: String},
    date: {type: Date, default: Date.now},
    wodType: String,
    wodStyle: String,
    movements: {type: String, required: true},
    duration: String,
    cratedBy: String,
    avatar: String,
    modifications: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Wod', wodSchema)