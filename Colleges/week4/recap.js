hello();

function hello() {
  console.log('Hello!');
}

hello();

function sayHelloToHuman(name) {
  console.log(`Hello ${name}!`);
}

sayHelloToHuman('Kilian');
sayHelloToHuman('Patrick');

function divide(a, b) {
  return a / b;
}

let a = 7;
let b = -3;
console.log(`The division of ${a} and ${b} is ${divide(a, b)}`);
a = 5;
b = 8;
console.log(`The division of ${a} and ${b} is ${divide(a, b)}`);

const sub = function (a, b = 0) {
  return a - b;

};
a = 5;
b = 8;
console.log(`The subtraction of ${a} and ${b} is ${sub(a, b)}`);
console.log(`The subtraction of ${a} and ${b} is ${sub(a)}`);

const add = (a = 0, b) => {
  return a + b;
};

a = 2;
b = -3;
console.log(`The addition of ${a} and ${b} is ${add(a, b)}`);
console.log(`The addition of ${a} and ${b} is ${add(a)}`);

// IIFE
(function () {
  console.log('Je zit hierbinnen :D');

  function init() {
    console.log('Init');
  }

  init();
})();
// init();

(() => {
  const x = 5;
  const y = -4;
  console.log(`${x + y}`);
})();
// console.log(`${x + y}`);

