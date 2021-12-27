import {JuegoCartas} from '../js/cartas-class';

// eventos 

const pedir = document.querySelector('#pedirCarta');
const nuevo = document.querySelector('#nuevo');
const detener = document.querySelector('#detener');

const juego = new JuegoCartas();

juego.crearDeck();


nuevo.addEventListener('click', () => {

    juego.iniciarJuego();
    pedir.classList.add('masoAnimate');
   

})

pedir.addEventListener('click', () =>{

   juego.pedir();

});


detener.addEventListener('click', () => {

   juego.detener();

   detener.classList.add("disabled");
   pedir.classList.add("disabled");
  
});
