const mysql = require('mysql2')
const { v4: uuidV4 } = require('uuid')
class DB {

    constructor(table) {
        this.table = table
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME 
        })
    }
    /**
     * 
     * @param {*} data 
     * @param {error,result } callback 
     */
    insert(data, callback) {
        this.connection.connect((err) => {
            if (err) {
                callback(err, null)
            } else {
                data.id = uuidV4()
                const sql = `INSERT INTO ${this.table} ${this.prepareInsert(data)}`
                this.connection.query(sql, (error, result) => {
                    if (error) {
                        callback(error, null)
                    } else {
                        callback(null, result)
                    }
                })
            }
        })
    }
    /**
     * 
     * @param {error, result} callback 
     */
    getAll(callback) {
        this.connection.connect((err) => {
            if (err) {
                callback(err, null)
            } else {
                this.connection.query(`SELECT * FROM ${this.table}`, (error, result) => {
                    if (error) {
                        callback(error, null)
                    } else {
                        callback(null, result)
                    }
                })
            }
        })
    }

    /**
     * 
     * @param id 
     * @param {error, result} callback 
     */
    getById(id, callback) {
        this.connection.connect((err) => {
            if (err) {
                callback(err, null)
            } else {
                this.connection.query(`SELECT * FROM ${this.table} WHERE id='${id}'`, (error, result) => {
                    if (error) {
                        callback(error, null)
                    } else {
                        callback(null, result)
                    }
                })
            }
        })
    }

    /**
     * 
     * @param id 
     * @param {error, result} callback 
     */
    delete(id, callback) {
        this.connection.connect((err) => {
            if (err) {
                callback(err, null)
            } else {
                this.connection.query(`DELETE FROM ${this.table} WHERE id='${id}'`, (error, result) => {
                    if (error) {
                        callback(error, null)
                    } else {
                        callback(null, result)
                    }
                })
            }
        })
    }

     /**
     * 
     * @param ids 
     * @param {error, result} callback 
     */
    deleteMany(ids, callback) {
        for (let index = 0; index < ids.length; index++) {
            const id = ids[index];
            this.delete(id, (error, result) =>{
                if (index == ids.length - 1) {
                    if (error) {
                        callback(error, null)
                    } else {
                        callback(null, result)
                    }
                }
                console.log(id);
            })
        }
    }
    

    prepareInsert(data) {
        let keySegments = '';
        let valueSegments = '';
        for(let [key, value] of Object.entries(data)) {
            keySegments+= key+','
            valueSegments+= `'${value}',`
        }
        keySegments = keySegments.substring(0, keySegments.length - 1)
        valueSegments =  valueSegments.substring(0, valueSegments.length - 1)
        return `(${keySegments}) VALUES (${valueSegments})`
    }
    
}

module.exports = DB