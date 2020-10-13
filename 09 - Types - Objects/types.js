const name = 'ernie';
const age = 100;

const person = {
  first: 'ernie',
  last: 'buyco',
  age: 100,
};

const template = `
    <div>
        <h2>${person.first}</h2>
        <p>${person.last}</p>
        <p>${person.age}</p>
    </div>
`; // dot notation technique

document.body.innerHTML = template;
