const p = document.querySelector('p');
console.log(p);

navigator.vibrate(200);

// scrollTo(0, 200);

scrollTo({ top: 500, left: 0, behaviour: 'smooth' });
