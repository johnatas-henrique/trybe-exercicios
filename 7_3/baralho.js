const deckBtn = document.querySelector('#deck');
const gridCards = document.querySelector('.grid-cards');
const arrImgCartas = ['baralho-img/cinco-de-ouros.png', 
    'baralho-img/nove-de-espadas.png', 
    'baralho-img/quatro-de-paus.png', 
    'baralho-img/seis-de-copas.png',
    'baralho-img/sete-de-espadas.png',
    'baralho-img/sete-de-paus.png',
    'baralho-img/tres-de-ouros.png' ]


function compraCarta(){
    divCarta = document.createElement('div');
    imgElem =  document.createElement('img');
    imgElem.src = arrImgCartas[Math.floor(Math.random() * 7)];
    divCarta.appendChild(imgElem);
    gridCards.appendChild(divCarta);
}

deck.addEventListener('click', compraCarta);
