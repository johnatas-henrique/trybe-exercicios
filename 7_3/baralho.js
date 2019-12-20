const deckBtn = document.querySelector('#deck');
const gridCards = document.querySelector('.grid-cards');
const arrImgCartas = ['baralho-img/cinco-de-ouros.png', 
    'baralho-img/nove-de-espadas.png', 
    'baralho-img/quatro-de-paus.png', 
    'baralho-img/seis-de-copas.png',
    'baralho-img/sete-de-espadas.png',
    'baralho-img/sete-de-paus.png',
    'baralho-img/tres-de-ouros.png' ]
let animaCards = [];
const arrClassAnima = ['girar', 'aumentar', 'virar'];


function compraCarta(){
    divCarta = document.createElement('div');
    divCarta.classList.add('hand');
    imgElem =  document.createElement('img');
    imgElem.src = arrImgCartas[Math.floor(Math.random() * 7)];
    divCarta.appendChild(imgElem);
    gridCards.appendChild(divCarta);
    animaCards = document.querySelectorAll('.hand');
}

function removeAnima(){
    event.target.className = 'hand';
}

function adicionaAnima(){
    event.target.classList.add(arrClassAnima[Math.floor(Math.random() * 3)]);
}

function encontraDiv(){
    for (i = 0; i < animaCards.length; i++){
        animaCards[i].addEventListener('mouseenter',adicionaAnima);
        animaCards[i].addEventListener('mouseleave',removeAnima);
    }
}

gridCards.addEventListener('mouseenter',encontraDiv);
deck.addEventListener('click', compraCarta);
