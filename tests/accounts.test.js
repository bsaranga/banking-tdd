const uuid_matcher = require('../jest_extensions/uuid_matcher');
const Account = require('../src/Account');
const AccountManager = require('../src/AccountManager');

expect.extend(uuid_matcher);

test('Account manager class type check', () => {
    expect(new AccountManager()).toBeInstanceOf(AccountManager)
});

test('New account manager should have zero unsaved accounts', () => {
    const accountManager = new AccountManager();
    expect(accountManager.getAccounts()).toHaveLength(0);
});

test('Account manager should be able to create an account', () => {
    const accountManager = new AccountManager();
    const account = accountManager.createAccount('John Doe', 0);

    expect(account).toBeInstanceOf(Account);
    expect(account.name).toEqual('John Doe');
    expect(account.balance).toEqual(0);
});

test('Accounts should have a creation date', () => {
    const accountManager = new AccountManager();

    const currentDate = new Date();
    const account = accountManager.createAccount('John Doe', 0);

    expect(account.createdAt).toBeInstanceOf(Date);

    expect(account.createdAt.getDay()).toEqual(currentDate.getDay());
    expect(account.createdAt.getMonth()).toEqual(currentDate.getMonth());
    expect(account.createdAt.getFullYear()).toEqual(currentDate.getFullYear());
});

test('Get accounts should return the newly created account', () => {
    const accountManager = new AccountManager();
    const account = accountManager.createAccount('John Doe', 0);

    expect(accountManager.getAccounts()).toContain(account);
});

test('Get accounts should return all newly created accounts', () => {
    const accountManager = new AccountManager();
    const account1 = accountManager.createAccount('John Doe', 0);
    const account2 = accountManager.createAccount('Jane Doe', 0);

    expect(accountManager.getAccounts()).toContain(account1);
    expect(accountManager.getAccounts()).toContain(account2);
})

test('An account should have an internally assigned unique id', () => {
    const accountManager = new AccountManager();
    const account = accountManager.createAccount('John Doe', 0);

    expect(account.id).toBeDefined();
    expect(account.id).toBeTruthy();
    expect(account.id).toBeUUID();
});

test('Account manager should be able to commit all accounts to database', () => {
    const accountManager = new AccountManager();
    accountManager.createAccount('John Doe', 0);

    accountManager.commit();

    expect(accountManager.getAccounts()).toHaveLength(0);
})