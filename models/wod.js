const mongoose = require('mongoose');
const Schema = mongoose.Schema

const wodSchema = new Schema ({
    title: {type: String, required: true},
    date: {type: Date, default: Date.now},
    wodType: {type: String,
        enum: ['Strength', 'Cardio', 'Mix']},
    wodStyle: {type: String,
        enum: ['AMRAP', 'EMOM', 'FOR TIME', 'E2MOM', 'FOR QUALITY']},
    movement: {type: Schema.Types.ObjectId, ref: 'Movement'},
    duration: {type: Number},
    modifications: {type: String}
}, {
    timestamps: true
})

module.exports = mongoose.model('Wod', wodSchema)