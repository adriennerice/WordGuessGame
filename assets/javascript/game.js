// [Variables]

var seaCreatures = ["whale", "squid", "shark", "sponge"];
var lettersGuessed = [];
var lettersWrong = [];
var winMessage = "You win! Let's play again!";
var looseMessage = "You loose. Out of guesses. Please try again.";
var blankMessage = "";
var startMessage = "Rules: Guess the correct letters to spell a word. Select a letter to start."

var userGuess;

var wins = 0;
var loss = 0;
var lives = 5;


// Randomly picks sea creature
var answer = ""; 
document.getElementById("message").innerHTML = startMessage;
  
// [FUNCTIONS]

//Start Function

function start(){
  lettersGuessed = [];
  lettersWrong = [];
  lives = 5;
  
  document.getElementById("guessRemain").innerHTML = lives;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("loss").innerHTML = loss;

  answer = seaCreatures[Math.floor(Math.random() * seaCreatures.length)];
  
  for(var i = 0; i < answer.length; i++){
    lettersGuessed[i] = "_";
    }
   
  document.getElementById("word").innerHTML = lettersGuessed.join('');
};


//Check letters in word and start new game Function

function check(){
  document.onkeyup = function(event) {
    document.getElementById("message").innerHTML = blankMessage;

     // Save user key press as lowercase letter
     userGuess = event.key.toLowerCase(); //checks if a string? 
    
     // [Check if letter guessed is already guessed]
     // Guess letter and show if in word
     for(var i = 0; i < answer.length; i++){
      if(lettersGuessed.indexOf(userGuess) < 0){ // ***issue if word has multiple of same letter
        if(userGuess === answer[i]){
          lettersGuessed[i] = userGuess;
          document.getElementById("word").innerHTML = lettersGuessed.join('');
        }
      }  
    }
     // [Check if wrong letter is already guessed]
     // List out wrong letters guessed
     if (lettersGuessed.indexOf(userGuess) < 0 && lettersWrong.indexOf(userGuess) < 0){
      lettersWrong.push(userGuess);
      lives--;
      document.getElementById("guessRemain").innerHTML = lives;
      document.getElementById("guessed").innerHTML = lettersWrong.join(' '); 
      
      if (lives === 0){
        document.getElementById("message").innerHTML = "The word is " + answer + ". " + looseMessage;
        console.log(looseMessage);
        loss++;
        document.getElementById("loss").innerHTML = loss;
        start();
      } 
     }

      //Check of word was guessed
      if (lettersGuessed.join('') === answer)
      {
        document.getElementById("message").innerHTML = "The word is " + answer + ". " + winMessage;
        console.log(winMessage);
         
        wins++;  //output wins
        document.getElementById("wins").innerHTML = wins;
        start();
      }
     }  
};


//Invoke functions
start();
check();


