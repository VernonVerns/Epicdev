const DB = require('../config/db')

module.exports = class NoteRepo {
    constructor(){
        this.db = new DB('notes')
    }

}