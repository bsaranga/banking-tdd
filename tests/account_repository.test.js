const Account = require('../src/Account');
const AccountRepository = require('../src/AccountRepository');
/*
Account repository abstracts the database interaction from the AccountManager class. It is responsible for saving and retrieving accounts from the database. The AccountRepository class should have the following methods:
 - GetAllAccounts(): Account[] - returns all accounts from the database
 - SaveAccount(account: Account): void - saves an account to the database
 - DeleteAccount(account: Account): void - deletes an account from the database
 - UpdateAccount(account: Account): void - updates an account in the database
 - GetAccountById(id: string): Account - returns an account by its id
*/

test('Account respository type check', () => {
    expect(new AccountRepository()).toBeInstanceOf(AccountRepository);
});

test('Account repository should initially have zero accounts', async () => {
    const accountRepository = new AccountRepository("/home/bsaranga/repos/banking-tdd/tests/db0.json");
    expect(await accountRepository.GetAllAccounts()).toHaveLength(0);
});

test('Account repository should be able to save accounts', async () => {
    const accountRepository = new AccountRepository("/home/bsaranga/repos/banking-tdd/tests/db1.json");
    const accountObj = new Account("John Doe", 1000);
    await accountRepository.SaveAccount(accountObj);
    expect(await accountRepository.GetAllAccounts()).toHaveLength(1);
});