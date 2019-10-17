const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const helmet = require('helmet')

const PORT = 5005
const app = express()
const Schema = mongoose.Schema
const model = mongoose.model

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

mongoose.connect('mongodb://localhost/LifeSports', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection to database was successful"))
    .catch(() => console.log("Connection with database was unsuccessful. Fix issue"))



/* Will be sent to a separate file to be clean */

/* start of Attendance */
const attendanceSchema =  new Schema({
    Date: Date,
    isThere: Boolean,
    comment: String,
    excuse: Boolean,
    whyExcused: Boolean
})

const attendanceModel = model('attendance', attendanceSchema)
/* end of Attendance */

/* start of behavorals */
const behavioralsSchema = new Schema({
    dateOccured: Date,
    dateMade: { type: Date, default: Date.now() },
    subject:[ String ], //["swearing", "fighting"]
    details: String,
    Action: String
})

const behavioralsModel = model('behaviorls', behavioralsSchema)
/* end of behaviorls */

/* start of student */
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

const studentModel = model('student', studentSchema)
/* end of Student */

/* start of functionality */

/* end of functionality */




/* start of endpoints */
app.get('/', (req, res) =>{
    res.send('hello world')
})
/* end of endpoints */


app.listen(PORT, () => { console.log(`listening on port ${PORT}`) })
