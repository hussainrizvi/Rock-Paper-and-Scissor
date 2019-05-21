
let playerScore = 0;
let computerScore = 0;
let round = 0;

function getPlayer (){
    let player = prompt(`Enter choice: `)
    return player.toLowerCase();
};

function getComputer () {
    let computer = Math.floor(Math.random() * 3);
    switch (computer) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
    }

};

function gameRule () {
    while (round < 5) {
        console.log("This is round " + round);
        let playerSelect = getPlayer ();
        let computerSelect = getComputer();
        console.log (`p1: ${playerSelect} and p2: ${computerSelect}`);
        if (playerSelect == computerSelect) {
            console.log("You have tied!");
        }
        else if (playerSelect == "rock" && computerSelect == "scissor") {
            console.log("You won!");
            playerScore++
        }
        else if (playerSelect == "paper" && computerSelect == "rock") {
            console.log("You won!");
            playerScore++
        }
        else if (playerSelect == "scissor" && computerSelect == "rock") {
            console.log("You won!");
            playerScore++
        }
        else {
            console.log ("You lose!");
            computerScore++
        }
        round++
    }
    console.log ("Your score is " + playerScore + " to " + computerScore);
    if (playerScore > computerScore) {
        console.log ("You won the game!");
    }
    else if (playerScore < computerScore) {
        console.log ("You lost the game!");
    }
    else {
        console.log ("The game was tied!");
    }

};

gameRule();

