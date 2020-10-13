/* eslint-disable */
const name = 'ernie';
const middle = 'topher';
const last = `secret`;

const sentence1 = 'she\'s so cool'; /*escaping technique*/
const sentence2 = "she's so \"cool\""; /*double quotes technique*/
const sentence3 = `she\`s's so "cool"`; /*back-ticks quotes technique*/

const song = 'ohh\
\
    i\
    like\
    pizzaaaaaa\
\
\
';

const html = `
    <div>
        <h2>Sample Test</h2>
    </div>
`;

const concatenation= "hello my name is " + name + "Nice to meet you"; // concatenation

let interpolation = 'hello my name is';
interpolation = interpolation + name;
interpolation = interpolation + 'Nice to meet you';

const hello2 = `hello my name is ${name} nice to meet you. I am ${1+100} years old`;

const template = `
        <div>
            <h2>${name}</h2>
            <p>${hello2}</p>
        </div>
`;

document.body.innerHTML = template;
console.log(template);