const mongoose = require('mongoose');
const Schema = mongoose.Schema

const wodSchema = new Schema ({
    title: {type: String, required: true},
    date: {type: Date, default: Date.now},
    wodType: {type: String,
        enum: ['Strength', 'Cardio', 'Mix']},
    wodStyle: {type: String},
    bodyZone: {type: String, 
        enum: ['Legs', 'Arms', 'Chest', 'Back', 'Core', 'Shoulders', 'Full Body/Cardio']},
    movement: {type: String},
    duration: {type: Number},
    modifications: {type: String}
}, {
    timestamps: true
})