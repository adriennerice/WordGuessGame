# WordGuessGame
Ocean Hangman is a Word Guess Game similar to Hangman.

Rules: Guess the correct letters to spell a word. Select a letter to start.

Future update: Code 2.0

Issue: Accepts non letters as input. Need to add a check for non letters and require the player to enter a letter. 

Resolution: Need to create an array of acceptible inputs (letters) and use a loop to check if the input is valid.

Issue: Used indexOf() method to check if letter was already guessed. Will not find the same letter multiple times if it is in the word multiple times. Only used words without reoccuring letters. 

Resolution: Need to refractor the code and break it up into multiple functions. Then look through the letters guessed instead of using indexOf() to review every instance of a letter.
