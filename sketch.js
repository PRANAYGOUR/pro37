var canva;
var contestantCount;
var game;
var database; 
var quiz, question;
var contestant, allContestants;
var gameState = 0;
var quiz;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
 quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 3){
    quiz.update(1);
    
  }
  if(gameState === 1){
    clear();
  quiz.play();
    
  }

}