let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/*This function will be called at the start of each new round
in order to generate the new secret target number from 0-9.*/
function generateTarget() {
    return Math.floor(Math.random() * 10);
} 

/*This function will be called each round to determine
 which guess is closest to the target number.*/
function compareGuesses(human, computer, target) {
    if( Math.abs(target - human) <= Math.abs(target - computer) ){
        return true; // human wins
    } else {
        return false; // computer wins
    }
}

/* This function will be used 
to correctly increase the winner’s score after each round.*/
function updateScore(str) {
    if( str === 'human') {
        humanScore += 1;
    } else if ( str === 'computer') {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
    humanGuessInput.innerHTML = 0;
}