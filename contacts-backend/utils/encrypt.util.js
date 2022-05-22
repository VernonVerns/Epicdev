const bcrypt = require('bcrypt')

module.exports = class EncryptUtil {
    constructor() {
        this.saltRounds = 10
    }

    async hashPassword(password) {
        return bcrypt.hash(password, this.saltRounds)
    }

    async verifyPassword(plainPassword, hashedPassword) {
        return bcrypt.compare(plainPassword, hashedPassword)
    }

}