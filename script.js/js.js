const immagine = document.getElementById('image');
const button = document.getElementById('bottone');
button.addEventListener('click', function (){

if (immagine.classList.contains(immagine.src='./img/yellow_lamp.png')) {
        immagine.classList.remove(immagine.src='./img/yellow_lamp.png');
        immagine.classList.add(immagine.src='./img/white_lamp.png');
    }
    else {
        immagine.classList.remove(immagine.src='./img/white_lamp.png');
        immagine.classList.add(immagine.src='./img/yellow_lamp.png');
    }
/*
immagine.classList.toggle(immagine.src='./img/yellow_lamp.png');
*/
});

