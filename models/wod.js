const mongoose = require('mongoose');
const Schema = mongoose.Schema

const wodSchema = new Schema ({
    title: {type: String, required: true},
    date: {type: Date, default: Date.now},
    wodType: String,
    wodStyle: String,
    movements: String,
    duration: String,
    cratedBy: String,
    avatar: String,
    modifications: String,
    baseline: Boolean
}, {
    timestamps: true
})

module.exports = mongoose.model('Wod', wodSchema)