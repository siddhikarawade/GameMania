//wanna add: 
//1. user can click button only once
//2. button cannot be clicked at other times



let gameSeq = [];
let userSeq = [];
let colors = ["green", "pink", "yellow", "purple"];

let started = false;
let level = 0;
let score= 0;
let highScore= 0;

let h2 = document.querySelector('.main-container h2');


document.addEventListener('keypress', function(){
    if(started == false){
        started = true;
        setTimeout(function (){
            levelUp();

        },1000)
    }   
});

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = "Level "+level;

    let randomValue = Math.floor(Math.random()*4);
    let randomColor = colors[randomValue];
    let randomKey = document.querySelector (`.${randomColor}`);
    gameSeq.push(randomColor);

    setTimeout(function(){
        gameFlash(randomKey);
    },1000)
    
    // console.log(gameSeq);
};

function gameFlash(key){
    // console.log(key);
    key.classList.add("flash");
    setTimeout (function (){
        key.classList.remove("flash");
    },100)
};


function keypressed(){
    let key=this;
    gameFlash(key);
    let userColor = key.getAttribute("id");

    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allKeys = document.querySelectorAll('.key');
for (key of allKeys){
    key.addEventListener("click",keypressed);
}

function checkAns(idx){
    // let idx = level-1;
    if (gameSeq[idx] === userSeq[idx]){
        if (gameSeq.length == userSeq.length){
            score+= 10;
            levelUp();
        }
    }else{
        h2.innerText = "Game over! Score: "+score+"\nPress any key to continue.\n Highscore: "+highScore;
        document.querySelector('.main-container').style.backgroundColor="rgb(255,0,0,0.5)";
        setTimeout(function(){
            document.querySelector('.main-container').style.backgroundColor="white";
        },200);
        resetGame();
    }


    if (score > highScore){
        highScore = score;
    }
}

function resetGame(){
    started = false;
    level = 0;
    score = 0;
    gameSeq = [];
    userSeq = [];
}