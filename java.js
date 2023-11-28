function computerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerChoice, pcChoice) {
    if (pcChoice == playerChoice) {
      return 'Draw';
    } else if (
      (playerChoice == 'Rock' && pcChoice == 'Scissors') ||
      (playerChoice == 'Paper' && pcChoice == 'Rock') ||
      (playerChoice == 'Scissors' && pcChoice == 'Paper')
    ) {
      return 'You won!';
    } else {
      return 'You lose!';
    }
  }
  
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');
  let roundCounter = 0;
  let playerScore = 0;
  let pcScore = 0;
  
  function handleButtonClick(event) {
    const body = document.querySelector("body");
    if (roundCounter < 5) {
      const playerChoice = event.target.value;
      const pcChoice = computerChoice();
      const result = playRound(playerChoice, pcChoice);
  
      let div = document.createElement('div');
      div.textContent = `Player choice: ${playerChoice}, PC choice: ${pcChoice}, Result: ${result}`;
      body.append(div);
  
      roundCounter++;
    if (result=="You won!"){
        playerScore++;
    }
    else if(result=="You lose!"){
        pcScore++;
    }
  
     
  }
  if(roundCounter==5){
    scoreBoard=document.createElement('div')
    scoreBoard.style="red";
    if(playerScore>pcScore){
        scoreBoard.textContent=`Player won over the Pc with score ${playerScore} to ${pcScore}`;
        body.append(scoreBoard);
    }
    else if(pcScore>playerScore){
        scoreBoard.textContent=`Pc won over the Player with score ${pcScore} to ${playerScore}`;
        body.append(scoreBoard);
    }
    else{
        scoreBoard.textContent=`Its a draw both have score of ${pcScore}`;
        body.append(scoreBoard);
    }
  }


}
  
  rock.addEventListener('click', handleButtonClick);
  paper.addEventListener('click', handleButtonClick);
  scissors.addEventListener('click', handleButtonClick);
  
  

