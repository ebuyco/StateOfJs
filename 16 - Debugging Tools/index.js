// const people = [
//   { name: 'Wes', cool: true, country: 'Canada' },
//   { name: 'Ernie', cool: true, country: 'Mariana Trench' },
//   { name: 'Scott', cool: true, country: 'America' },
//   { name: 'Snickers', cool: false, country: 'DOg Whisperer' },
// ];

// Console Methods
// people.forEach((person, index) => {
//   console.error(person.name);
//   if (person.name === 'Ernie') {
//     console.warn('Dumb Name');
//   }
//   console.groupCollapsed(`${person.name}`);
//   console.log(`${person.country}`);
//   console.log(`${person.cool}`);
//   console.log(`DONE!!!!`);
//   console.groupEnd(`${person.name}`);
// });

// console.table(people);
function doLotOfStuff() {
  //   console.group('Doing some stuff');
  //   console.log('Hey Im One');
  //   console.warn('watch out');
  //   console.error('Hey');
  //   console.groupEnd('Doing a Lot of Coding');
}
// Console Methods end

// Callstack, Stack Trace
function greet(name) {
  //   doesntExist(); // Cause an Error
  return `Hello ${name}`;
}

// function go() {
//   const name = doctorize(greet('Wes'));
//   console.log(name);
// }

// function bootstrap() {
//   console.log('Starting the App');
//   go();
// }

// bootstrap();

// Callstack, Stack Trace End

// Grabbing Elements

// Grabbing Elements end

// Breakpoints
// const people = [
//   { name: 'Wes', cool: true, country: 'Canada' },
//   { name: 'Ernie', cool: true, country: 'Mariana Trench' },
//   { name: 'Scott', cool: true, country: 'America' },
//   { name: 'Snickers', cool: false, country: 'DOg Whisperer' },
// ];

// people.forEach((person, index) => {
//   debugger;
//   console.log(person.name);
// });
// Breakpoints End

// Network Request

// Network Request End

// Break On Attribute

// Break On Attribute End

function doctorize(name) {
  //   console.count(`running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
