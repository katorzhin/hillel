class BankAccount {

    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(sum) {
        if (sum > 0) {
            this.balance += sum;
        } else {
            console.log('Сума для внесення має бути більше 0');
        }
    }

    withdraw(sum) {
        if (sum > 0 && sum <= this.balance) {
            this.balance -= sum;
        } else {
            console.log('Недостатньо коштів чи некоректна сума');
        }
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300