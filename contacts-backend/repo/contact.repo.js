const DB = require('../config/db')
const EncryptUtil = require('../utils/encrypt.util')
module.exports = class ContactRepo {

    constructor() {
        this.db = new DB('contacts')
    }

    async storeContact(req, res) {
        let contact = await this.toDbFormat(req.body)

        this.db.insert(contact, (error, result) => {
            if (error) {
                res.status(403).send(error)
            } else {
                //TODO: Insert the note
                res.status(200).send('Contact successfully added!!')
            }
        })
    }

    getAllContacts(req, res) {
        this.db.getAll((error, result) => {
            if (error) {
                res.status(403).send(error)
            } else {
                
                if (result && result.length > 0) {
                    result = result.map(contact => this.fromDbFormat(contact))
                }
                res.status(200).send(result)
            }
        })
    }

    getSearchedContacts(req, res) {
        const {searchText} = req.body
       const keys = ['name', 'surname', 'email']
        this.db.getSearched(keys, searchText, (error, result) => {
            if (error) {
                res.status(403).send(error)
            } else {
                
                if (result && result.length > 0) {
                    result = result.map(contact => this.fromDbFormat(contact))
                }
                res.status(200).send(result)
            }
        })
    }

    getById(req, res) {
        const id = req.params.contactId
        this.db.getById(id, (error, result) => {
            if (error) {
                res.status(403).send(error)
            } else {
                if (result && result.length > 0) {
                    result = this.fromDbFormat(result[0])
                    res.status(200).send(result)
                } else {
                    res.status(204).send('Ooops, contact not found')
                }
                
            }
        })
    }

    delete(req, res) {
        const id = req.params.contactId
        this.db.delete(id, (error, result) => {
            if (error) {
                res.status(403).send(error)
            } else {
                res.status(200).send('Successfully deleted!!')
            }
        })

    }

    deleteMany(req, res) {
        const ids = req.body
        this.db.deleteMany(ids.contacts, (error, result) => {
            if (error) {
                res.status(403).send(error)
            } else {
                res.status(200).send('Successfully deleted!!')
            }
        }) 
    }

    fromDbFormat(data) {
        const {cell_number, home_number, date_created, date_updated, ...other} = data
        const preparedData = {cellNumber: cell_number, homeNumber: home_number, 
            dateCreated: date_created, dateUpdated: date_updated, ...other}
        return preparedData
    }

    async toDbFormat(data) {
        const {cellNumber, homeNumber, ...other} = data
        other.password = await (new EncryptUtil().hashPassword(other.password))
        const preparedData = {cell_number: cellNumber, home_number: homeNumber, ...other}
        return preparedData
    }
}