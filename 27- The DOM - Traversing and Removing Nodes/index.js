const ernie = document.querySelector('.ernie');

// console.log(ernie.children);
// console.log(ernie.firstElementChild);
// console.log(ernie.lastElementChild);
// console.log(ernie.previousElementSibling);
// console.log(ernie.nextElementSibling);
// console.log(ernie.parentElement);


// console.log(ernie.childNodes);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);
