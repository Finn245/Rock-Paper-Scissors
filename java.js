function computerchoice(){
    const r="rock";
    const s="scissors";
    const p="paper";
  choice=Math.round(Math.random()*(3-1))+1;
  if (choice==1){
    return r;
  }
  else if(choice==2){
    return p;
  }
  else{
    return s;
  }
}


function playerselection(){
    
do{
    player=prompt("give ur choice");

}while((lettre(player))==false);
    return player;
}
function lettre(ch){
    let a="ROCK";
    let b="SCISSORS";
    let d="PAPER";
    ch1="";
    ch1=ch.toUpperCase();
    
    switch (ch1){
        case a:
            return true;
        case b :
            return true;
        case d:
            return true;
        default:
            return false;   

    }
}


function game(){

    let nbplayer=0;
    let nbpc=0
    for (let i=1;i<=5;i++){
    let playerselect=playerselection();
    let computerselect=(computerchoice());
    console.log(computerselect);
    if(playerselect.toUpperCase()=="ROCK"){
        if(computerselect.toUpperCase()=="ROCK"){
            console.log("Draw in",i);
        }
        else if(computerselect.toUpperCase()=="PAPER"){
            console.log("Paper Beats Rock");
            console.log ("pc won round",i);
            nbpc=nbpc+1;
        }
        else{
            console.log("Rock beats Scissors");
            console.log("you won round",i);
            nbplayer=nbplayer+1;
        }
    }
    else if(playerselect.toUpperCase()=="PAPER"){
        if(computerselect.toUpperCase()=="ROCK"){
            console.log("Paper beats Rock");
            console.log("you won round",i);
            nbplayer=nbplayer+1;
        }
        else if(computerselect.toUpperCase()=="PAPER") {
            console.log("Draw in",i);
        }
        else{
            console.log("Scissors beats Rock");
            console.log("pc won round",i);
            nbpc=nbpc+1;
        }
    }
    else{
        if (computerselect.toUpperCase()=="ROCK"){
            console.log("Rock beats scissors");
            console.log("pc won round",i);
            nbpc=nbpc+1;
        }
        else if(computerselect.toUpperCase()=="PAPER"){
            console.log("Scissors beats Paper");
            console.log("you won round",i);
            nbplayer=nbplayer+1;
        }
        else{
            console.log("Draw in",i);
        }
    }
   }
   console.log("your score",nbplayer)
   console.log("pc score",nbpc);
}

console.log(game());