let age;
console.log(age);
age = 10;

function sayHi() {
  console.log('Hey');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

const anotherAdd = function (a, b) {
  return a + b;
};

sayHi();
