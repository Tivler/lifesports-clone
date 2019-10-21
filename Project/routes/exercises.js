
/////////////////////////////////////////////
//// API endpoints for managing exercises //
///////////////////////////////////////////

const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// Your Challenge: Make five routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/





// 1. get all exercise logs on record
// GET: /
router.get('/', (req, res) =>{
    Exercise.find({}, (err, doc) =>{
        if(err){
            console.log("could to get all exercises");
        } else{
            console.log("successfully found all exercises")
            res.send(doc)
        }
    })
})
// ========================================


// 2. add a new exercise log
// POST: /add
router.post('/add', (req, res) =>{
    Exercise.insertMany(req.body, err =>{
        if(err){
            console.log('creating new user failed')
        } else{
            console.log('created new user')
        }
    })
})
// ========================================

// 3. retrieve a specfic exercise log
// GET: /:id
router.get('/:id', (req, res) =>{
    const id = req.params.id
    Exercise.findOne({ _id: id }, (err, doc) =>{
        err ? console.log("finding exercise failed") : res.send(doc)
    })
})
// ========================================


// 4. delete a specfic exercise log
// DELETE: /:id
router.delete('/:id', (req, res) =>{
    const id = req.params.id
    console.log(id)
    Exercise.deleteOne({ _id: id }, (err) =>{
        err ? console.log("Deleting exercise failed") : console.log("Exercise was deleted")
    })
    res.end()
})
// ========================================


// 5. retrieve a specific exercise log and update it 
// with information sent by client on req body
// POST: /update/:id

// ========================================


module.exports = router;