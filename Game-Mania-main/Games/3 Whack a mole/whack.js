const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');

const time = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 10;
let countDownTimerID;
let moleMoveInterval;

function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    moleMoveInterval = setInterval(randomSquare, 500);
}

const start = document.querySelector('.start');

start.addEventListener('click', () => {
    moveMole();
    countDownTimerID = setInterval(countdown, 1000);
});

function countdown() {
    currentTime--;
    time.textContent = currentTime;

    if (currentTime === 0) {
        time.textContent = 10;
        currentTime = 10;
        clearInterval(countDownTimerID);
        clearInterval(moleMoveInterval); // Clear the mole movement interval
        alert('GAME OVER ! Your final score is ' + result);
        result = 0;
        score.textContent = result;
    }
}


