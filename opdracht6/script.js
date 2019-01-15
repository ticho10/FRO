const knop = document.getElementById('knop');
let vlak = document.getElementsByClassName('vlakje');

const schuif = () => {
  for (var i = 0; i < vlak.length; i++) {
    vlak[i].classList.toggle('vlakje--schuif-uit');
    clearTimeout(3000)
  }

}

knop.addEventListener('click', schuif);
