import { v4 as uuidv4 } from 'uuid';

class Account {
    constructor(name, balance) {
        this.id = uuidv4();
        this.name = name;
        this.balance = balance;
        this.createdAt = new Date();
    }
}

export default Account;