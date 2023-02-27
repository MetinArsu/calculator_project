class Calculator {
  constructor() {
    this.PI = 3.141592653589793;
    this.E = 2.718281828459045;
  }
  get pi() {
    return `PI (${this.PI})`;
  }
  get e() {
    return `Euler's number (${this.E})`;
  }

 // Methods \\
  ratio(x, y, width) {
    let height = (width / x) * y;
    return `height is ${height} on ratio ${x}:${y}`;
  }
  percentage(x, y) {
    let num = (x * 100) / y;
    return `${num}%`;
  }
  add(x, y) {
    let num = x + y;
    return num;
  }
  subtract(x, y) {
    let num = y - x;
    return num;
  }
  multiply(x, y) {
    let num = x * y;
    return num;
  }
  divide(x, y) {
    let num = x / y;
    if (num <= 0) {
      return `Error!!!`;
    }
    return num;
  }
  modulation(x, y) {
    let num = x % y;
    if (num <= 0) {
      return `Error!!!`;
    }
    return num;
  }
  elevate(x, y) {
    let num = Math.pow(x, y);
    return num;
  }
  sqrt(x) {
    return Math.sqrt(x);
  }
}

let calculate = new Calculator();

// Log's
console.log(calculate.pi);
console.log(calculate.e);
console.log(calculate.ratio(16, 9, 1280));
console.log(calculate.percentage(25, 1620));
console.log(calculate.add(25, 1620));
console.log(calculate.subtract(25, 1620));
console.log(calculate.multiply(25, 1620));
console.log(calculate.divide(25, 1620));
console.log(calculate.modulation(25, 1620));
console.log(calculate.elevate(1023, 44));
console.log(calculate.sqrt(25, 1620));
