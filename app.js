
// // Core Game Function



let userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
let computerChoice = Math.floor(Math.random() * 3);
let playerScore = 0;
let computerScore = 0;


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
            playerScore ++;
            return "Rock wins, congrats!!";
        } 
        else {
            computerScore ++;
            return "Paper wins, you lose!";
        }
    }        
    if (choice1 ==="paper"){
        if (choice2 === "rock"){
            playerScore ++;
            return "Paper wins, congrats!";
        } else {
            computerScore ++;
            return "Scissors wins, you lose!";
        }
    }
    if (choice1 === "scissors"){
        if (choice2 === "paper"){
            playerScore ++;
            return "Scissors wins, congrats!";
        } else {
            computerScore ++;
            return "Rock wins, you lose!";
        }
    }
};    


function get_user_score() {
	if (result=="Win") {
		user_score=user_score+1;
		}
	return user_score;
	}


// compare(userChoice, computerChoice);
document.getElementById("the result").innerHTML = compare (userChoice, computerChoice);


console.log(playerScore)

document.getElementById("computer choice").innerHTML = (`Computer chose: ${computerChoice}`)
document.getElementById("user choice").innerHTML = (`You chose: ${userChoice}`)
document.getElementById("versus").innerHTML = (`${userChoice} vs. ${computerChoice}`)


document.getElementById("versus-user").innerHTML = (`${userChoice}`)
document.getElementById("versus-computer").innerHTML = (`${computerChoice}`)

document.getElementById("player-score").innerHTML = (`Your score: ${playerScore} Computer Score:${computerScore}`)










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
