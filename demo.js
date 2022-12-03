//Randomly selects an option 
function computerPlay() {
    let items = Array("rock", "paper", "scissors")
      let item = items[Math.floor(Math.random()*items.length)];
      console.log ('ComputerPlay Item', item)
        return item
}

// User provides the input 
function playerOptions() {
    let option = prompt("Welcome to Rock Paper Scissors Game: Please enter your choice", "rock");
    let result = option.toLowerCase();
    result= result.trim()
    if (result== "rock" || result=="paper" || result=="scissors"){
        console.log ('Player Option', result)
        return result
    }else{
        console.log("Invalid Input")
        return playerOptions()
    }
}


function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
       console.log ('Tie');
       return "Tie"
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            console.log ('Computer Won');
            return "Computer Won"            
        }else{
            console.log ('Player Won');
            return "Player Won"       
        }  
    }
        
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            console.log ('Computer Won');
            return "Computer Won"
            
        }else{
            console.log ('Player Won');
            return "Player Won"
        }
    }
        
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
             console.log ('Computer Won');
             return "Computer Won"
        }else{
            console.log ('Player Won');
            return "Player Won"
        }
    }   
}

function game(){
    let computerScore = 0
    let playerScore =  0
    for (roundCount=1; roundCount<=5; roundCount++){
        const playerSelection= playerOptions() 
        const computerSelection= computerPlay() 
        const play = playRound(playerSelection, computerSelection)
        
        
        if (play==="Computer Won"){
            computerScore = computerScore + 1;
            console.log("Computer Score", computerScore)
        }else if (play==="Player Won"){
            playerScore= playerScore + 1;
            console.log("Player Score", playerScore)
        }else{
            console.log("Its a Tie: Current Player Score", playerScore, "Computer Score", computerScore)
        }  
    }
    if(computerScore > playerScore){
        return "You Lose"
    } else{
        return "You Won"
    }
}

const finalResult= game()   
   console.log("Final Result of this game",finalResult) 
