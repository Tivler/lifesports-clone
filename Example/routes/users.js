
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
router.get('/users/all', async (req, res) => {
    const user = await User.find({})
    res.json(user)
 
})

// router.get("/users/all", (req, res) => {
//     const collection = db.collection('LifeSports')
//     collection.find({}).toArray((error, data) => {    
//       if (error) {
//         res.send(error);
//       } else {
//         res.json(data);
//       }
//     })
//   })
  
// 2. add a new user
// POST /
// ========================================
  router.post('/users/add', async ({body}, res) => {
    User.create(body)
    .then(dbUsers => {
      res.json(dbUsers)
    })
.catch(err => {
  res.json(err)
})
})

 // 3. delete a user
 router.delete("/users/:id",async (req, res) => {
    const user = await User.deleteOne({_id: req.params.id})
    res.send(user)
  })  // would i need to include users?

module.exports = router;