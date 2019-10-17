const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: { 
        type: String, 
        require: true,
        unique: true,
        trim: true,
        minlength: 3, 
    },
    address: { type: String },
    DOB: Date,
    status: Object, // this object contains what student is doing atm and time started
    behaviorals: [ behavioralsSchema ],
    attendance: [ attendanceSchema ],
})

module.exports = model('student', studentSchema)