const cardArray = [
    {
        name: 'img1',
        img: 'Images/img1.webp',
    },
    {
        name: 'img2',
        img: 'Images/img2.webp',
    },
    {
        name: 'img3',
        img: 'Images/img3.webp',
    },
    {
        name: 'img4',
        img: 'Images/img4.webp',
    },
    {
        name: 'img5',
        img: 'Images/img5.webp',
    },
    {
        name: 'img6',
        img: 'Images/img6.webp',
    },
    {
        name: 'img1',
        img: 'Images/img1.webp',
    },
    {
        name: 'img2',
        img: 'Images/img2.webp',
    },
    {
        name: 'img3',
        img: 'Images/img3.webp',
    },
    {
        name: 'img4',
        img: 'Images/img4.webp',
    },
    {
        name: 'img5',
        img: 'Images/img5.webp',
    },
    {
        name: 'img6',
        img: 'Images/img6.webp',
    }
]

cardArray.sort(() => 0.5 - Math.random());//shuffling an array randomly

const grid = document.querySelector("#grid");
const result = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIDs = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < 12; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'Images/image.png');
        card.setAttribute('data-id', i);
        grid.appendChild(card);
        card.addEventListener('click', flipCard)
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    if (cardsChosen[0] == cardsChosen[1]) {
        // alert("You found a match");
        // cards[cardsChosenIDs[0]].setAttribute('src','Images/img.webp');
        // cards[cardsChosenIDs[1]].setAttribute('src','Images/img.webp');
        cards[cardsChosenIDs[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIDs[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen)
    }
    else {
        cards[cardsChosenIDs[0]].setAttribute('src','Images/image.png');
        cards[cardsChosenIDs[1]].setAttribute('src','Images/image.png');
    }

    result.textContent = cardsWon.length;
    cardsChosen = []
    cardsChosenIDs = []


    if (cardsWon.length == cardArray.length/2){
        result.innerHTML="Winss!";
    }
}


function flipCard() {
    const cardID = this.getAttribute('data-id');
    cardsChosen.push((cardArray[cardID].name));
    cardsChosenIDs.push(cardID);
    console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardID].img);
    // console.log("heelo",cardsChosen.length);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}