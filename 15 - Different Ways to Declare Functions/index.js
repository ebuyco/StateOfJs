// const age = 100;
// const cool = true;

// function doctorize(firstName) {
//   return `Dr ${firstname}`;
// }

//1. Anonymous function, a function without a name is an anonymous function.
// function (firstName) {
//         return `Dr. ${firstName}`;
// }
//1. Anonymous function End

//2. Function Expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };
//2. Function Expression End

// 3. Hoisting
// function doctorize2(firstName) {
//   return `Dr. ${firstName}`;
// }

// console.log(doctorize2('Ernie'));

// 3. Hoisting End

// Arrow Function is anonymous

// function inchToCM(inches) {
//   //   const cm = inches * 2.54;
//   //   return cm;

//   return inches * 2.54;
// }

// const inchesToCM = function (inches) {
//   return inches * 2.54;
// };

// const inchToCM = (inches) => inches * 2.54;

// const inchToCM = (inches) => {
//   return inches * 2.54;
// };

/* eslint-disable */
const inchToCM = inches => inches * 2.54;

// function add(a, b = 3){
//     const total = a + b;
//     return total;
// }

// const add = function (a, b = 3) {
//   const total = a + b;
//   return total;
// };

// const add = (a, b = 3) => a + b;

// Arrow Function End

// returning an object
// function makeABaby(first, last){
//     const baby = {
//         name: `${first} ${last}`,
//         age: 2
//     }
    
//     return baby;
// }

// const makeABaby = (first, last) => {
//     return {
//         name: `${first} ${last}`,
//         age: 2

//     }
//   };

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age:0  });

// returning an object end

// IIFE (Immediately Invoked Function Expression)
// function(){
//     console.log('running an unanimous function');
//     return 'You are Cool';
// }

(function(age){
     return `You are Cool and age ${age}`;
   })(10);
// IIFE (Immediately Invoked Function Expression) end

// Method !!!
const wes = {
    name: 'Ernie',
    // Method !
    sayHi: function(){
            console.log(`Hey ${this.name}`);
            // console.log('Hey Wes');
            return 'Hey Wes';
    },
    // Short Hand Method
    yelHi(){
        console.log(`HEY WESSSS`);
    },

    //Arrow Function
    wisperHi: () => {
        console.log(`Hi wess im a mouse`);
    }
}


// Method !!! END

// Callback Function
    
// Click callback
const button = document.querySelector('.clickMe');

function handleCLick(){
    console.log('Great Clicking!!!');
}

// button.addEventListener('click', handleCLick);
button.addEventListener('click', function() {
        console.log(`Nice job`);
});



// Callback Function End

// Timer Callback
setTimeout(wes.yelHi,1000);

setTimeout(function(){
    console.log('Time to Eat!@!!!')
}, 10000)

setTimeout(() => {
    console.log('Time to Eat!@!!!')
}, 10000)

// Timer Callback end