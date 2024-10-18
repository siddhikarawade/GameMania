let letters = document.querySelector('.letters');
let hintt = document.querySelector('.hint');
let wordDisplay = document.querySelector('.word-display');
let currWord;
let totguess = 6;
let wronguess=0;
let corrlett = [];
let guessLeft = document.querySelector('.guessleft');
guessLeft.innerText = `Guesses left: ${(totguess - wronguess)} / ${totguess}`;
let lose = document.querySelector('#lose');
let win = document.querySelector('#win');
let draw = document.querySelector('.draw img');
let cover = document.querySelector('.cover');
let playagain = document.querySelector('.playagain');
let playagain2 = document.querySelector('.playagain2');

const getRandomWord = () => {
    const { word, hint }=wordList[Math.floor(Math.random() * wordList.length)+1];
    console.log({word,hint});
    currWord = word;
    hintt.innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="fillLetter"></li>`).join("");
}


// const gameover = (isVictory) =>{
//     setTimeout(() => {
        
//     })
// }

const restartGame = () => {
    totguess = 6;
    wronguess=0;
    corrlett = [];
    draw.src = `hangman-${wronguess}.svg`;
    guessLeft.innerText = `Guesses left: ${(totguess - wronguess)} / ${totguess}`;
    letters.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.querySelectorAll("li")[index].innerText = letter;
    
    // getRandomWord();
}
const initGame = (button, clickedLetter) =>{
    if(currWord.includes(clickedLetter)){
        console.log("yes");
        [...currWord].forEach((letter,index) => {
            if (letter === clickedLetter){
                corrlett.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add('correct');
            }
        })
    }
    else{
        wronguess++;
        draw.src = `hangman-${wronguess}.svg`;
        guessLeft.innerText = `Guesses left: ${(totguess - wronguess)} / ${totguess}`;
    }
    button.disabled = true;
    if (wronguess === totguess){
        cover.style.display = "block";
        lose.classList.add('pop');
        document.querySelector('.corrword').innerText =`Correct word was: ${currWord}`;
    }
    if (corrlett.length === currWord.length){
        cover.style.display = "block";
        win.classList.add('pop');
        document.querySelector('.corrword').append(currWord);
    }
}

playagain.addEventListener("click", () =>{
    cover.style.display = "none";
    win.classList.remove('pop');
    lose.classList.remove('pop');
    restartGame();
    getRandomWord();
})
playagain2.addEventListener("click", () =>{
    cover.style.display = "none";
    win.classList.remove('pop');
    lose.classList.remove('pop');
    restartGame();
    getRandomWord();
})



for(let i=97; i<123; i++){
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    letters.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}
getRandomWord();
playagain.addEventListener("click",getRandomWord);
playagain2.addEventListener("click",getRandomWord);