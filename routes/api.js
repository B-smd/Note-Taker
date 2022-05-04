const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { v4 } = require('uuid');

const dbPath = path.join(__dirname, '..', 'db', 'db.json');

/**
 * 
 * @returns {Array}
 */
function getNotes(){

    return JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
}


function saveNotesToDb(notes){
    fs.writeFileSync(dbPath, JSON.stringify(notes), 'utf8');
}
// Read the 'db.json' file and return all saved notes as JSON
router.get('/api/notes', (req, res) => {
    res.json(getNotes())

});
    
// Receive a new note to save on the request body 
router.post('/api/notes', (req, res) => {
    
    console.log(req.body);

    
    
    const {title, text} = req.body;

    // generate an ID to the new note
    const newNote = {
        id: v4(),
        title: title,
        text: text,
    };
    
    
    // get all the notes in db json
    
    const notes = getNotes();
    notes.push(newNote);
    
    saveNotesToDb(notes);
    
    // send back response to client, with the new note in the res body
    res.json({
        data: 'okay',
    })

    });
    
    
    // Delete a note
    router.delete('/api/notes/:id', (req, res) => {
        
        const notes = getNotes();
   
       // filter out the select note 
        const result = notes.filter((note) => {
            return note.id !== req.params.id
        });

        // resave to db.json
        saveNotesToDb(result);
        res.json({
            data: 'okay',
        })
        
    });
        

module.exports = router;


