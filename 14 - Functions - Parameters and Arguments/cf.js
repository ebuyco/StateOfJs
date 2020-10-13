// Global Variable
// let bill = 100;
// const taxRate = 0.13;

// function calculateBill() {
//   const total = bill * 1 + taxRate;
//   return total;
// }

// const myTotal = calculateBill();
// bill = 200;
// const myTotal2 = calculateBill();

// console.log(myTotal, myTotal2);

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // parameter
  console.log(billAmount, taxRate);
  //   const total = billAmount * (1 + taxRate);
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// const myTotal = calculateBill(100, 0.13);
// const myTotal2 = calculateBill(200, 0.13);
// console.log(myTotal, myTotal2);
const mySubTotal = 500;
const myTaxRate = 0.3;
// const myTotal = calculateBill(100, 0.13);
const myTotal = calculateBill(mySubTotal, myTaxRate);

// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Ernie');
// console.log(greeting);
// const data = 100;
// const myTotal3 = calculateBill(data + 20 + 20 + 30 + 20,100, 0.15);

function doctorize(name) {
  return `Dr. ${name}`;
}
function yell(name = 'Something New') {
  return `Hey ${name.toUpperCase()}`;
}

yell(doctorize('ernie'));

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
