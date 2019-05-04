// Guess what letter I am thinking of

//Wins we want to increase this every [i] that meets the win conditions
var wins = 0

//Losses we want to increase this every [i] that meets the loss conditions
var losses = 0

//Guesses Left they get 9 total this will decrease with every onkeyup
var remaining = 9

//Your Guesses so far write each guessed letter to the page 

var wrongGuesses =[]
// if user hits 9 [i] without computerChoice = userGuess reload page

//generate computer guess
var computerChoices = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

document.onkeyup = function(event) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Determines which key user pressed.
    var userGuess = event.key;

    //win scenario
    if (userGuess === computerGuess) {
        //increase wins by 1
        //reset game, 
        //clearing wrong guesses
    
        // still in scenario
    } else if(remaining>0) {
        //reduce remaining by 1
        //push wrong guess into the array
      
    //donezo
    } else {
        //increase losses variable by 1 
        //reset game
        //clear wrong guesses
    }

    
    Guess what letter I'm thinking of
    
    Wins: (# of times the user has guessed the letter correctly)
    
    Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
    
    Guesses Left: (# of guesses left. This will update)
    
    Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
    
    When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
    
    When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).




    //for reference this is the RPS code:
    // Alerts the key the user pressed (userGuess).
    // if ((userGuess === "r") || (userGuess === "p") ||(userGuess === "s"))   
    // alert("User guess: " + userGuess);
    // // Alerts the Computer's guess.
    // alert("Computer guess: " + computerGuess);
    // if ((computerGuess === "r" && userGuess === "p") || (computerGuess === "p" && userGuess === "s") || (computerGuess === "s" && userGuess === "r"))
    //  { alert("You Win");}
    // else if(computerGuess === userGuess) {
    //   alert("You Tie");
    // }
    // else 
    //   {alert("You Lose")}}

}