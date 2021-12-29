
// // Core Game Function



let userChoice = prompt("Do you choose rock, paper or scissors?");
let computerChoice = Math.floor(Math.random() * 3);
if (computerChoice === 1) {
	computerChoice = "rock";
} else if(computerChoice === 2) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
console.log(computerChoice)


let compare = function(choice1, choice2) {
    if (choice1===choice2) {
       return "The result is a tie!"; 
    }
    if (choice1==="rock"){
        if (choice2==="scissors"){
            return "Rock wins over the computer's choice, scissors, you won!!";
        } else {
            return "paper wins, you lose!";
        }
    }        
    if (choice1 ==="paper"){
        if (choice2 === "rock"){
            return "Paper wins over the computer's choice, rock, you win!";
        } else {
            return "scissors wins, you lose!";
        }
    }
    if (choice1 === "scissors"){
        if (choice2 === "paper"){
            return "Scissors wins over the computer's choice, paper, you won!";
        } else {
            return "rock wins, you lose!";
        }
    }
};    
// compare(userChoice, computerChoice);

document.getElementById("computer choice").innerHTML = (`The computer chose ${computerChoice}`)

document.getElementById("the result").innerHTML = compare(userChoice, computerChoice);










// let computerScore = 0
// let playerScore = 0
// let roundWinner = ''

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         roundWinner = 'tie'
//     }
//     if (
//         (playerSelection === 'rock' && computerSelection === 'scissors') ||
//         (playerSelection === 'scissors' && computerSelection === 'paper') ||
//         (playerSelection === 'paper' && computerSelection === 'rock') )
//     {
//         playerScore++
//         roundWinner = 'player'
//     }
//     if (
//         (playerSelection === 'scissors' && computerSelection === 'rock') ||
//         (playerSelection === 'rock' && computerSelection === 'paper') ||
//         (playerSelection === 'paper' && computerSelection === 'scissors') )
//      {
//         computerScore++
//         roundWinner = 'computer'
//     }
//     return playRound(roundWinner)
    
// }

// function randomChoice() {
//     let randomNumber = Math.floor(Math.random() * 3)
//     switch (randomNumber) {
//         case 0:
//             return 'rock'
//         case 1:
//             return 'scissors'
//         case 2:
//             return 'paper'
//     }
// }

// function gameOver() {
//     return playerScore === 5 || computerScore === 5
// }
