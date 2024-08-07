const fs = require('fs').promises;

class AccountRepository {
    #data;
    #filePath;
    constructor(filePath = "./data.json") {
        this.#data = [];
        this.#filePath = filePath;
    }

    async GetAllAccounts() {
        try {
            await this.#fetch();
            return this.#data;   
        } catch (error) {
            console.log(error);
        }
    }

    async SaveAccount(account) {
        try {
            const accounts = await this.#fetch();
            accounts.push(account);
            const jsonStr = JSON.stringify(account);
            await fs.writeFile(this.#filePath, jsonStr, 'utf-8');
        } catch (error) {
            
        }
    }

    async #fetch() {
        try {
            this.#data = JSON.parse(await fs.readFile(this.#filePath, 'utf8'));
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = AccountRepository