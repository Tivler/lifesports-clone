
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
// ========================================
app.get("/users/all", (req, res) => {
    const collection = db.collection('LifeSports')
    collection.find({}).toArray((error, data) => {    
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    })
  })

// 2. add a new user
// POST /
// ========================================
app.post("/users/add", (req, res) => { 
    const collection = db.collection('LifeSports')
    collection.insertOne(req.body, (error, data) => {   
      if (error) {
        res.send(error);
      } else {
        res.send(data.ops[0]);
      }
    });
  });

module.exports = router;