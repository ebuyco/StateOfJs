const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('remove');

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute puppy'; // setter

pic.width = 200;
console.log(pic.alt); //getter
console.log(pic.naturalWidth); //getter

// window.addEventListener('load', function () {
//   console.log(pic.naturalWidth);
// });

pic.addEventListener('load', function () {
  console.log(pic.naturalWidth); // getter
});

// pic.setAttribute('alt', 'Really Cute Puppie');
// console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function () {
  alert(`welcome mother fuckers ${custom.dataset.name} ${custom.dataset.last}`);
});
