
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
router.get("/exercises/all", (req, res) => {
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
router.post("/exercises/add", (req, res) => { 
    Exercise.create(req.body).then(data=>res.json(data)).catch(err=>console.log(err));
  });
// router.post("/exercises/add", (req, res) => { 
//     const collection = db.collection('LifeSports')
//     collection.insertOne(req.body, (error, data) => {   
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data.ops[0]);
//       }
//     });
//   });

// 3. retrieve a specfic exercise log
// GET: /:id
// ========================================
router.get("/:id", (req, res) => {
    Exercise.findOne().then(data=>res.json(data)).catch(err=>console.log(err));
  });
// app.get("/exercises/find/:id", (req, res) => {
//     const collection = db.collection('LifeSports')  
//     collection.findOne(
//       {
//         _id: ObjectId(req.params.id)
//       },
//       (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       }
//     );
//   });


// 4. delete a specfic exercise log
// DELETE: /:id
// ========================================
router.delete("/:id",async (req, res) => {
    const exercise = await Exercise.deleteOne({_id: req.params.id})
    res.send(exercise)
})
// app.delete("/exercises/delete/:id", (req, res) => {
//     const collection = db.collection('LifeSports')
//     collection.deleteOne(
//       {
//         _id: ObjectId(req.params.id)
//       },
//       (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       }
//     );
//   });
  

// 5. retrieve a specific exercise log and update it 
// with information sent by client on req body
// POST: /update/:id
// ========================================
router.post("/update/:id", (req, res) => {
    let id = req.param.id
    console.log(id)
      Exercise.updateOne(
        {
          _id: req.params.id
        },
        {
          $set: {
            username: req.body.username,
            description: req.body.description,
            duration: req.body.duration,
            date: req.body.date
          }
        },{new: true}
      ).then(data=> res.json(data).catch(err=> console.error(err)))}
      );
// app.post("/exercises/update/:id", (req, res) => {
//     const collection = db.collection('LifeSports')
//     collection.updateOne(
//       {
//         _id: ObjectId(req.params.id)
//       },
//       {
//         $set: {
//           title: req.body.title,
//           note: req.body.note,
//           modified: Date.now()
//         }
//       },
//       (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       }
//     );
//   });


module.exports = router;