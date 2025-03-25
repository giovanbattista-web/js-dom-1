const immagine = document.querySelector('img');
const button = document.getElementById('change_color');
button.addEventListener('click', function(){
    if(immagine.classList.contains()){
        immagine.classList.remove();
    }
    else {
    immagine.classList.add();
    }
 });