import Account from './Account';

class AccountManager {
    #accountStore;

    constructor() {
        this.#accountStore = [];
    }

    getAccounts() {
        return this.#accountStore;
    }

    createAccount(name, startingBalance) {
        const account =  new Account(name, startingBalance);
        this.#accountStore.push(account);
        return account;
    }

    commit() {
        const _accounts = this.#accountStore.map(acc => acc);
        // save to database
        this.#accountStore = [];
    }
}

export default AccountManager;