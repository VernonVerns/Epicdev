const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const contactsController = require('./controllers/contacts.controller')
const notesController = require('./controllers/notes.controller')

app.use(express.json())
app.use(cors({origin: '*'}))

const PORT = process.env.PORT || 5000


app.use('/contacts', contactsController)
app.use('/notes', notesController)

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})