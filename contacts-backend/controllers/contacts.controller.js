const express = require('express')
const router = express.Router()
const ContactRepo = require('../repo/contact.repo')
const contactRepo = new ContactRepo()
router.post('/create', (req, res) => contactRepo.storeContact(req, res)) 

router.get('/', (req, res) => contactRepo.getAllContacts(req, res))

router.get('/:contactId', (req, res) => contactRepo.getById(req, res))

router.get('/search/contact', (req, res) => contactRepo.getSearchedContacts(req, res))

router.delete('/:contactId', (req, res) => contactRepo.delete(req, res))

router.delete('/', (req, res) => contactRepo.deleteMany(req, res))

module.exports = router
