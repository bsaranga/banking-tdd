const { v4: uuidv4 } = require('uuid');

class Account {
    constructor(name, balance) {
        this.id = uuidv4();
        this.name = name;
        this.balance = balance;
        this.createdAt = new Date();
    }
}

module.exports = Account;