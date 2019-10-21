
//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let User = require('../models/user.model');

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. get all users on record
// GET: /
router.get('/', (req, res) =>{
    User.find({}, (err, doc)=>{
        if(err){
            console.log('retrieve was unsuccessful')
        } else{
            console.table("retieval was successful")
            console.table(doc)
            res.send(doc)
        }
    })
})
// ========================================


// 2. add a new user
// POST /
router.post('/add', (req, res) =>{
    const { username } = req.body
    console.log(username)
    User.insertMany({username}, (err) =>{
        if(err){
            console.log('creating new user failed')
        } else{
            console.log('created new user')
        }
    })
})
// ========================================


module.exports = router;