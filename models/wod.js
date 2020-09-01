const mongoose = require('mongoose'); 
const Schema = mongoose.Schema

const resultSchema = new Schema ({
    time: String,
    maxReps: Number,
    user: [{ type: Schema.Types.ObjectId, ref: 'User'}]
})

const wodSchema = new Schema ({
    title: {type: String, required: true},
    date: {type: Date, default: new Date()},
    wodType: String,
    wodStyle: String,
    movements: String,
    duration: String,
    cratedBy: String,
    avatar: String,
    modifications: String,
    baseline: Boolean,
    result: [resultSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Wod', wodSchema)