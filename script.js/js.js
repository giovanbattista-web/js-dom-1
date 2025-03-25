const greetings = document.getElementById('saluta');
console.log(greetings);

const immagine = document.querySelector('img');
const button = document.getElementById('change_color');
button.AddEventListener('click', function(){
    if(immagine.classList.contains()){
        immagine.classList.remove();
    }
    else {
    immagine.classList.add();
    }
 });