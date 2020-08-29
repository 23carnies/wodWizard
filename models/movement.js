const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movementSchema = new Schema ({
    name: {type: String, required: true},
    bodyZone: {type: String, required: true,
        enum: ['Legs', 'Arms', 'Chest', 'Back', 'Core', 'Shoulders', 'Full Body/Cardio']},
    description: {type: String},
    image: {type: String}
}, {
    timestamps: true
})

module.exports = mongoose.model('Movement', movementSchema)