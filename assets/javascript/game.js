// [Variables]

var seaCreatures = ["whale", "squid", "shark", "sponge"];
var lettersGuessed = [];
var lettersWrong = [];

var userGuess;
//var guessTotal = 0;  //++

var wins = 0;
var lives = 5;


// Randomly picks sea creature
var answer = ""; 

  
// [FUNCTIONS]

//Start Function

function start()
{
  lettersGuessed = [];
  lettersWrong = [];
  lives = 5;

  answer = seaCreatures[Math.floor(Math.random() * seaCreatures.length)];
  
  for(var i = 0; i < answer.length; i++)
    {
    lettersGuessed[i] = "_";
    //console.log(lettersGuessed[i]);
    }
    // dont try to save a joined array into another array

    // underScore = lettersGuessed.join(''); //need to space these out with CSS
    // console.log(underScore);
    // console.log(lettersGuessed);
  document.getElementById("word").innerHTML = lettersGuessed.join('');

};


//Check letters in word and new game function
function check(){
  document.onkeyup = function(event) {

     // Save user key press as lowercase letter
     userGuess = event.key.toLowerCase(); //checks if a string? 
     
    // ***Check if only a string was entered
    

     // [Check if letter guessed is already guessed]
     // Guess letter and show if in word
     for(var i = 0; i < answer.length; i++)
     {
      if(lettersGuessed.indexOf(userGuess) < 0) // ***issue if word has multiple of same letter
      {
        if(userGuess === answer[i])
        {
          lettersGuessed[i] = userGuess;
          document.getElementById("word").innerHTML = lettersGuessed.join('');
        }
      }  
    }
     // [Check if wrong letter is already guessed]
     // List out wrong letters guessed
     if (lettersGuessed.indexOf(userGuess) < 0 && lettersWrong.indexOf(userGuess) < 0) 
     {
      lettersWrong.push(userGuess);
      lives--;
      document.getElementById("wrong").innerHTML = lettersWrong.join(' '); 
      if (lives === 0){
        console.log("You loose. Out of guesses");
        start();
      } 
     }
     
     // [Where to place this code. Guess counter and exit game]
    //  guessTotal++;

    //  console.log(guessTotal);
    //  // Check if out of guess
    //  if (guessTotal === lives){
    //   console.log("You loose. Out of guesses");
    //   start();
    //  }

      //Check of word was guessed
      if (lettersGuessed.join('') === answer)
      {
        console.log("You win");
        //You guessed the correct word "word"
        //play music
        wins ++;  //output wins
        start();
      }
     }  
};


//Invoke functions
start();
check();


