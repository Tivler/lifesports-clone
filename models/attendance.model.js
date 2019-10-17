const mongoose = require('mongoose')

const Schema = mongoose.Schema

const attendanceSchema =  new Schema({
    Date: Date,
    isThere: Boolean,
    comment: String,
    excuse: Boolean,
    whyExcused: Boolean
})

module.exports = model('attendance', attendanceSchema)