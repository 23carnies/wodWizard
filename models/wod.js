const mongoose = require('mongoose'); 
const Schema = mongoose.Schema

const resultSchema = new Schema ({
    time: String,
    reps: Number,
    rounds: String,
    distance: Number,
    user: [{ type: Schema.Types.ObjectId, ref: 'User'}]
})

const wodSchema = new Schema ({
    title: {type: String, required: true},
    date: {type: Date, default: new Date()},
    wodType: {type: String,
        enum: ['Strength', 'Cardio', 'Mix']},
    wodStyle: {type: String,
        enum: ['MAX REPS', 'X ROUNDS', 'FOR TIME', 'EMOM', 'AMRAP', 'E2MOM', 'FOR QUALITY', 'FOR DISTANCE']},
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