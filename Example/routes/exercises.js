
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
// ========================================
app.get("/all", (req, res) => {
    const collection = db.collection('LifeSports')
    collection.find({}).toArray((error, data) => {    
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    })
  })


// 2. add a new exercise log
// POST: /add
// ========================================
app.post("/add", (req, res) => { 
    const collection = db.collection('LifeSports')
    collection.insertOne(req.body, (error, data) => {   
      if (error) {
        res.send(error);
      } else {
        res.send(data.ops[0]);
      }
    });
  });

// 3. retrieve a specfic exercise log
// GET: /:id
// ========================================
app.get("/find/:id", (req, res) => {
    const collection = db.collection('LifeSports')  
    collection.findOne(
      {
        _id: ObjectId(req.params.id)
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });


// 4. delete a specfic exercise log
// DELETE: /:id
// ========================================
app.delete("/delete/:id", (req, res) => {
    const collection = db.collection('LifeSports')
    collection.deleteOne(
      {
        _id: ObjectId(req.params.id)
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });
  

// 5. retrieve a specific exercise log and update it 
// with information sent by client on req body
// POST: /update/:id
// ========================================
app.post("/update/:id", (req, res) => {
    const collection = db.collection('LifeSports')
    collection.updateOne(
      {
        _id: ObjectId(req.params.id)
      },
      {
        $set: {
          title: req.body.title,
          note: req.body.note,
          modified: Date.now()
        }
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });


module.exports = router;