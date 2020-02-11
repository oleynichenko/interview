class CombinationLock {
  constructor(combination) {
    this.combination = combination;
    this.reset();
  }

  reset() {
    this.status = 'LOCKED';
    this.digitsEntered = 0;
    this.failed = false;
  }

  enterDigit(digit) {
    if (this.status === 'LOCKED')
      this.status = '';

    this.status += digit.toString();

    if (this.combination[this.digitsEntered] !== digit) {
      this.failed = true;
    }

    this.digitsEntered++;

    if (this.digitsEntered === this.combination.length)
      this.status = this.failed ? 'ERROR' : 'OPEN';
  }
}

const cl = new CombinationLock([1,2,3]);
console.log(cl.status); // 'LOCKED'

cl.enterDigit('1');
console.log(cl.status); // '1'
cl.enterDigit('2');
console.log(cl.status); // '12'
cl.enterDigit('3'); // cl.status = '123'

console.log(cl.status); // 'OPEN'