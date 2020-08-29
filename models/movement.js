const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movementSchema = new Schema ({
    name: {type: String},
    bodyZone: {type: String},
    description: {type: String},
    image: {type: String}
}, {
    timestamps: true
})

module.exports = mongoose.model('Movement', movementSchema)