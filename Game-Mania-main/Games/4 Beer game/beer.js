let target = document.querySelector('.target h1');
let perc = Math.floor((Math.random()*100)+1);
let mugHeight;
let beerHeight;
let userfilled;
target.innerText="Fill the mug till: "+ perc+"%";

let handlebox = document.querySelector('.handlebox');
let pour = document.querySelector('#pour2');


//for beer falling down
let beer= document.querySelector('.beer');
let mug= document.querySelector('.mug');
let filled= document.querySelector('.filled');
let fill = document.querySelector('.fill');
let fp = document.querySelector('.filledpercent'); 
let comment = document.querySelector('.comment');


handlebox.addEventListener('mouseover',()=>{
    pour.classList.add('pour-fall');
    beer.classList.add('fill');
    beer.classList.remove('pause');
});


handlebox.addEventListener('mouseout',()=>{
    pour.classList.remove('pour-fall');
    beer.classList.add('pause');
    getheights();


    if (userfilled === perc)
    {
        fp.innerText="You've filled: "+userfilled+"%";
        comment.innerText="Miracle Miracle";
    }
    else if ((userfilled <= (perc+5)) && userfilled >= (perc-5))
    {
        fp.innerText="You've filled: "+userfilled+"%";
        comment.innerText="Nice Try";
    }
    else
    {
        fp.innerText="You've filled: "+userfilled+"%";
        comment.innerText="Check your eyesight bruh!";
    }
});

mug.addEventListener('click',()=> {
    beer.classList.remove('fill');
    beer.classList.remove('pause');
    fp.innerText="You've filled: ";
    comment.innerText="";
    perc = Math.floor((Math.random()*100)+1);
    target.innerText="Fill the mug till: "+ perc+"%";

})

function getheights(){

    mugHeight = Math.round(window.scrollY + mug.getBoundingClientRect().bottom) - Math.round(window.scrollY + mug.getBoundingClientRect().top);
    beerHeight = Math.round(window.scrollY + mug.getBoundingClientRect().bottom) - Math.round(window.scrollY + beer.getBoundingClientRect().top);
    console.log(mugHeight);
    userfilled = Math.round((beerHeight/mugHeight)*100);   
    console.log(userfilled);

}

