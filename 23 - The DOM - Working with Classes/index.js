const pic = document.querySelector('.nice');

pic.classList.add('open');
pic.classList.remove('cool');
// pic.classList.add('round');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.classList.contains('round');

// pic.className
