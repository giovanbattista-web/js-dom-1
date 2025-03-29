// RECUPERO L'IMMAGINE ED IL PULSANTE DAL DOM
const image = document.getElementById('off-lamp');
// const offLamp = document.getElementById('off-lamp');
// const onLamp = document.getElementById('on-lamp');
const button = document.getElementById('on-off');

// console.log(offLamp);
// console.log(onLamp);
// console.log(button);

// DEVO GESTIRE IL CLICK SUL PULSANTE 
button.addEventListener('click', function () {
  // CLICCATO IL PULSANTE DEVO CAMBIARE IL VALORE DELL'ATTRIBUTO src DELL'IMMAGINE
  // SE L'IMMAGINE E' QUELLA DELLA LAMPADINA GIALLA , VUOL DIRE CHE E' ACCESA QUINDI DEVO SPEGNERLA,
  // ALTRIMENTI VICEVERSA
  if(image.src.includes('yellow')){
    image.src = './img/white_lamp.png';
    button.innerText = 'Accendi';
  }
  else 
  {
    image.src = './img/yellow_lamp.png';
    button.innerText = 'Spegni';
  }





// onLamp.classList.remove('display-none');
// offLamp.classList.add('display-none');
});
