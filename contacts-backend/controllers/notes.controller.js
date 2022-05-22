const express = require('express')
const router = express.Router()
const NoteRepo = require('../repo/note.repo')
const noteRepo = new NoteRepo()

router.post('/create', (req, res) => {
    res.send(req.body)
})

router.delete('/:noteId', (req, res) => {
    
})

module.exports = router