const mongoose = require('mongoose'); 
const Schema = mongoose.Schema



const wodSchema = new Schema ({
    title: {type: String, required: true},
    date: {type: Date, default: new Date()},
    wodType: {type: String,
        enum: ['STRENGTH', 'CARDIO', 'MIX']},
    wodStyle: {type: String,
        enum: ['MAX REPS', 'X_ROUNDS', 'FOR_TIME', 'EMOM', 'AMRAP', 'E2MOM', 'FOR_QUALITY', 'FOR_DISTANCE']},
    movements: String,
    duration: String,
    createdBy: String,
    avatar: String,
    modifications: String,
    baseline: Boolean,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    results: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Wod', wodSchema)