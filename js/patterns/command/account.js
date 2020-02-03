let Action = Object.freeze({
  deposit: 0,
  withdraw: 1
});

class Command {
  constructor(action, amount) {
    this.action = action;
    this.amount = amount;
    this.success = false;
  }
}

class Account {
  constructor() {
    this.balance = 0;
  }

  process(cmd) {
    switch (cmd.action) {
      case Action.deposit:
        this.balance += cmd.amount;
        cmd.success = true;

        break;

      case Action.withdraw:
        if (this.balance >= cmd.amount) {
          this.balance -= cmd.amount;
          cmd.success = true;
        } else {
          cmd.success = false;
        }

        break;
    }
  }
}

const myAcc = new Account();

myAcc.process(new Command(Action.deposit, 100));
myAcc.process(new Command(Action.withdraw, 10));

console.log(myAcc.balance);

