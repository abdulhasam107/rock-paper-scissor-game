let user = 0;
let comp = 0;

let option = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uservalue = document.querySelector(".userscore")
let compvalue = document.querySelector(".comscore")

const showWinner = (userwin, userchoice, comchoice) =>{
    if(userwin){
        // console.log("user win");
        msg.textContent = `You Win.Your ${userchoice} beats ${comchoice}`
        msg.style.backgroundColor = "green"
        user++;
        uservalue.innerText = user

        
    }else{
        // console.log("You loss");
        msg.textContent = `You Lost.${comchoice} beats Your ${userchoice} `
        msg.style.backgroundColor = "red"
        comp++;
        compvalue.innerText = comp
    }
}

const drawgame = () => {
    msg.textContent = "Game Was Draw!Play again "
}

const gencompchoice = () => {
    let opt = ["rock", "paper", "scissors"]
    let rand = Math.floor(Math.random() * 3);
    return opt[rand];
}


let playgame = (userchoice) => {
    // console.log("user choice was click", userchoice);
    let comchoice = gencompchoice();
    // console.log("comp choice was click", comchoice);

    if(userchoice === comchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = comchoice === "paper" ? false : true;
        }else if (userchoice=== "paper"){
          userwin =   comchoice === "scissors" ? false : true;

        }else{
           userwin =  comchoice ==="rock" ? false : true;
        }
        showWinner(userwin, userchoice, comchoice);
    }
}



option.forEach((e) => {
    // console.log(e);
    e.addEventListener("click", () => {
        let userchoice = e.getAttribute("id");
        playgame(userchoice);
    })
})