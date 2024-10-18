document.addEventListener("DOMContentLoaded", function(){

    let quesDivs = document.querySelectorAll(".questions"),
        nextButtons = document.querySelectorAll(".nextbtn");
    
        let answerInputs = document.querySelectorAll(".ansInput")
        let userScore = 0
    
        let correctAnswers = ["basketball","jellyfish","keyboard","cupcake","seahorse","busdriver","rainbow","popcorn"]
    
        function hideAllQuestions(){
          quesDivs.forEach(function(div){
            div.style.display = "none"
          })
        }
    
    quesDivs[0].style.display = "block"
    
    
    nextButtons.forEach(function(button,index){
    button.addEventListener("click", function(){
      hideAllQuestions();
      if(index < quesDivs.length-1){
        quesDivs[index+1].style.display = "block"
      }
      else{
        userScore = 0
        
        for(let i=0;i<correctAnswers.length;i++){
          if(answerInputs[i].value.toLowerCase() === correctAnswers[i]){
            userScore++
          }
        }
      
        let scoreMessage = document.querySelector(".message")
        scoreMessage.style.display = "block"
        if(userScore<4){
          scoreMessage.textContent = "You lost Score : " + userScore 
        }
        else{
          scoreMessage.textContent = "You Won !!! Score : " + userScore
        }
      
      }
    
    
    })
    })
    
    })