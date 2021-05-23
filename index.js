
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
let reset  = $("#restart");
let h1 = document.querySelector("h1");
let level = 0;
let score = 0;
let score1 = 0;
let score2 = 0;
let activeplayer = 1;
let gameover = false;
let enterscore1 = document.querySelector(".score-player1");
let enterscore2 = document.querySelector(".score-player2");

h1.textContent = "get 20 score to win"

function random(){
  userClickedPattern = [];



  let random = Math.floor(Math.random()*4);
  let choosencolor = buttonColours[random];
  gamePattern.push(choosencolor);

  let randomcolor = $(`#${choosencolor}`)
  randomcolor.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

document.addEventListener("keypress",function(e){
    random()
    console.log(gamePattern)

  
  
})

document.addEventListener("click",function(e){
  let audiopress  = new Audio("sounds/yellow.mp3")
  audiopress.play();
  let user = e.target.id
  $(`#${user}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  userClickedPattern.push(user)
  console.log(userClickedPattern)


  
  if(gamePattern.length == userClickedPattern.length){
    if (JSON.stringify(gamePattern) == JSON.stringify(userClickedPattern)){
      setTimeout(random,1000);
      

      level ++;      
      score ++;
      h1.textContent = `level ${level}`;
      console.log(level);
      if(activeplayer == 1){
        score1 += level;      

      }else if(activeplayer == 2){
        score2 += level;
      }
      
      
      

    }else{
      document.body.style.backgroundImage = "url(images/go3.png)"
      let audio = new Audio("sounds/wrong.mp3");
      audio.play();
      reset.removeClass("remove");
      h1.textContent = `player 2 turn press switch . and press any key to start`;
      if(score1 > 100){
        h1.textContent = "player 1 wins"
        let audio1 = new Audio("sounds/game-win-sound-effect.mp3")
        audio1.play();
        document.body.style.backgroundImage = "url(images/winner.jpg)"

      
      }else if(score2 > 100){
        let audio2 = new Audio("sounds/game-win-sound-effect.mp3")

        h1.textContent = "player 2 wins"
        audio2.play();
        document.body.style.backgroundImage = "url(images/winner.jpg)"

      }
      if(activeplayer == 1){

        enterscore1.textContent = ` ur score ${score1}`;
        activeplayer = 2;
        level = 0;
        score = 0;

      }else if(activeplayer == 2){
        enterscore2.textContent = ` ur score ${score2}`;
        
        
        activeplayer = 1;
        level = 0;
        score = 0;

      }
  


    

    }
  }
  
  

  

})

let checkwinner = function(){
 
  }


reset.click(function(){
  gamePattern = []
  document.body.style.backgroundImage = "url(images/back.jpg)"




})


checkwinner();


