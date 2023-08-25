const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');// adding express validator from doc 6.12.0 
const fetchuser = require('../middleware/fetchuser');//importing fetchuser middleware
const Note = require("../models/Note");//importing notes model


//ROUT: 1  Get all the notes using : GET "/api/notes/getuser"  login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const note = await Note.find({ user: req.user.id });
        res.json(note)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error has occured");
      }
})

//ROUT: 2 Add a new note using : POST "/api/notes/addnote "  login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { title, description, tag } = req.body; // destructuring 
            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()
            res.json(savedNote)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
    

module.exports = router;