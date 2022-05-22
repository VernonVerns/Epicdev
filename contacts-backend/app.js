const express = require('express')
const app = express()
require('dotenv').config()

const contactsController = require('./controllers/contacts.controller')
const notesController = require('./controllers/notes.controller')

app.use(express.json())

const PORT = process.env.PORT || 3000


app.use('/contacts', contactsController)
app.use('/notes', notesController)

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})