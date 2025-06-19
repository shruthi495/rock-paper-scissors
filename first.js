let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#urmove");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#compscore");

const gencompChoice=()=>{
    const opts=["rock","paper","scissors"];
    const randId=Math.floor(Math.random()*3);
    return opts[randId];
}
const drawGame=()=>{
    console.log("game was drawn.");
    msg.innerText="Game was drawn";
    msg.style.fontSize="25px";
}
const showWinner=(userwin,userId,compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userId} beats ${compChoice}`;
        msg.style.fontSize="25px";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userId}`;
        msg.style.fontSize="25px";
    }

}

const playGame=(userId)=>{
    console.log("user choice=", userId);
    const compChoice=gencompChoice();
    console.log("comp choice=",compChoice );
    if(userId==compChoice){
        //DRAW GAME
        drawGame();
    }else{
        let userwin=true;
        if(userId==="rock"){
            userwin=compChoice==="paper"?false:true;
        }else if(userId=="paper"){
            userwin=compChoice==="scissors"?false:true;
        }else{
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin,userId,compChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userId=choice.getAttribute("id");
        playGame(userId);
        
    });
});