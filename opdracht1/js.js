// als op een link met een submenu geklikt wordt, moet ik niet naar de koppeling gaan

let heeftSub = document.querySelectorAll('.nav__subMenu > a');

console.log(heeftSub);

for (let i=0; i<heeftSub.length; i++){
    heeftSub[i].addEventListener('click', (e)=> e.preventDefault());
}