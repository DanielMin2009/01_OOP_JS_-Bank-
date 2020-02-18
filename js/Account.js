"use strict";
class Account {

    constructor(holder, accountNumber) {
        this._holder = holder;
        this._accountNumber = accountNumber;
        this._balance = 0;
        this._transactions = 0;
    }

    get holder() {
        return this._holder;
    }
    get accountNumber() {
        return this._accountNumber;
    }
    get balance() {
        return this._balance;
    }
    set transactions(transactions) {
        this._transactions = transactions;
    }
    get transactions() {
        return this._transactions;
    }

    /*
    depositMoney(amount) {
        if (amount > 0) {
            this._balance += amount;
            this._transactions++;
        }
    }
    */

    depositMoney(amount) {
        this._balance += amount;
        this._transactions++;
    }

    /*
    takeOutMoney(amount) {
        if (amount < this._balance) {
            this._balance -= amount;
            this._transactions++;
        }
    }
    */

    takeOutMoney(amount) {
        this._balance -= amount;
        this._transactions++;
    }
}

