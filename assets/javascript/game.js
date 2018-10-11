// [Variables]

var seaCreatures = ["narwhal", "squid"];
var seaCreatureLetters = [];
var lettersGuessed = [];

var guessTotal = 0;  //++
//var guessTotal = 5; // --
var wins = 0;


// Randomly picks sea creature
var answer; 
var underScore = "";
  
// [FUNCTIONS]

//Start Function

function start(){
  answer = seaCreatures[Math.floor(Math.random() * seaCreatures.length)];

  for(var i = 0; i < answer.length; i++)
    {
    lettersGuessed[i] = "_";
    //console.log(lettersGuessed[i]);
    }
  
    underScore = lettersGuessed.join(' ');
    //console.log(underScore);
  document.getElementById("word").innerHTML = underScore;

};


//Check letters in word and new game function
function check(){
  document.onkeyup = function(event) {

     var userText = event.key; 
     //console.log(userText);
  }
};


//Invoke functions
start();
check();

// Next, we give JavaScript a function to execute when onkeyup event fires.
// document.onkeyup = function(event) {

//   var userText = event.key;  
  
//   if (guessTotal == 5)
//   {
//     console.log("Game over. Out of guesses");
//   }
//   else {
//     for(var i = 0; i < answer.length; i++)
//     {
//           if (userText === answer.charAt(i))
//           {
//             console.log(answer[i]);
//           } 
//           else 
//           {
//             console.log("_" + " ");
//           }
//     }
//       guessTotal++; 
//     }
  

  
// };


