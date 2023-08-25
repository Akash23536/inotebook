const express = require('express'); // importing express validator 
const User = require('../models/User'); // importing User model from Model folder
const router = express.Router()
const { body, validationResult } = require('express-validator');// adding express validator from doc 6.12.0 
const bcrypt = require('bcryptjs'); //importing bcrypt.js to getRandomValues interface to obtain secure random numbers
const jwt = require('jsonwebtoken'); //importing JWT package
const fetchuser = require('../middleware/fetchuser');//importing fetchuser middleware
const JWT_SECRET = 'akashisagoodb$oy'; // creating signature of authtoken


//ROUT:1  create a user using post : "/api/auth/createuser"  no login required
router.post('/createuser', [
  body('name', 'enter a valid name').isLength({ min: 3 }),
  body('email', 'enter valid email').isEmail(),
  body('password', 'password must be atleast 5 charater').isLength({ min: 5 }),
], async (req, res) => {
  //if there are error,return bad requestand the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // check whether user with same email exist already
    let user = await User.findOne({ email: req.body.email });
    console.log(user)
    if (user) {
      return res.status(400).json({ error: "sorry a user with same email id already exists" })
    }
    // addind Hash and salt in secPassword
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt)

    //create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPassword,
    });
    // adding authentication token
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET); // sign the authtoken
    res.json({ authtoken })
  }
  catch (error) {
    console.error(error.message)
    res.status(500).send("some error has occured");
  }
})


//ROUT:2 authentication a user using : post "/api/auth/login"  no login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {

  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body; //destructuring email and password / user ko le rha hu body sa
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }
//comparing typed_password to db_password
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }
 // adding authentication token
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);// sign the authtoken
    res.json({ authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


//ROUT: 3   get loggin User detail  using : post "/api/auth/getuser"  login requiered
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user);
  } catch (error) {
    console.error(error.message)
    res.status(500).send("some error has occured");
  }
})

module.exports = router;