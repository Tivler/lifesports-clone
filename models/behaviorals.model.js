const mongoose = require('mongoose')

const Schema = mongoose.Schema


const behavioralsSchema = new Schema({
    dateOccured: Date,
    dateMade: { type: Date, default: Date.now() },
    subject:[ String ], //["swearing", "fighting"]
    details: String,
    Action: String
})

module.exports = model('behaviorls', behavioralsSchema)