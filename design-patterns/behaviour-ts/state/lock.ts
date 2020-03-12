enum Status {
  LOCKED,
  OPEN,
  ERROR
}

class CombinationLock {
  private state: State;

  constructor(private combination: number[]) {

  }

  reset() {
    this.state.reset
  }

  handleEnteredDigit(digit) {
    this.state.handleDigit(digit);
  }
}

const cl = new CombinationLock([1,2,3]);
console.log(cl.status); // 'LOCKED'

cl.enterDigit('1');
console.log(cl.status); // '1'
cl.enterDigit('2');
console.log(cl.status); // '12'
cl.enterDigit('3'); // cl.status = '123'

console.log(cl.status); /
