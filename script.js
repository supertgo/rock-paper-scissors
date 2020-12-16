
let botoesEl = document.querySelectorAll('input');
let wonCountPc = 0;
let wonCountPlayer = 0;


//Chamado quando o jogo termina
function disableButtons() {
    botoesEl.forEach(elem => {
        elem.disabled = true
    })
}



botoesEl.forEach(botaoSelecionado =>{
    botaoSelecionado.addEventListener('click', function(){
       
        let getResult = " ";
        let resultGame = playRound(botaoSelecionado.value);


        if (wonCountPc === 5){
            getResult = "You lost de game!! Refresh the page to play one more time";
            disableButtons();
            document.getElementById('result').innerText = getResult;
         }
        
        else if (wonCountPlayer === 5){
            getResult = "You won the game!! Refresh the page to play one more time";
            disableButtons();

            document.getElementById('result').innerText = getResult;
        }

        else{
                    if (resultGame[0] === "I"){
                        document.getElementById('result').innerText = resultGame;
                        wonCountPc++;
                        wonCountPlayer++;
                        document.getElementById('count').innerText = "Computer Score: " + wonCountPc + "\nYour Score: " + wonCountPlayer + "\n";
                    }
                    
                    else if (resultGame[4] === "W"){
                        wonCountPlayer++;
                        document.getElementById('result').innerText = resultGame;
                        document.getElementById('count').innerText = "Computer Score: " + wonCountPc + "\nYour Score: " + wonCountPlayer + "\n";
                    }
                    

                    else {
                        document.getElementById('result').innerText = resultGame;
                        wonCountPc++;
                        document.getElementById('count').innerText = "Computer Score: " + wonCountPc + "\nYour Score: " + wonCountPlayer + "\n";
                    }
                    
                }
         

         
    });
})



function computerPlay (){
    arrayGame = ["rock","paper", "scissors"];
    return arrayGame[Math.floor(Math.random() * arrayGame.length)];
}

function playRound (escolhaDoPlayer) {

    
    escolhaDoPc = computerPlay();

   
    if (escolhaDoPlayer === escolhaDoPc)
        return "Its a tie";
    
    else if (escolhaDoPc === "rock" && escolhaDoPlayer === "scissors" ||
            escolhaDoPc === "paper" && escolhaDoPlayer === "rock" ||
            escolhaDoPc === "scissors" && escolhaDoPlayer === "paper") {

                return "You Lost because " + escolhaDoPc + " beats " + escolhaDoPlayer + "!";
    }
    
    else 
        return "You Won beacuse " + escolhaDoPlayer + " beats " + escolhaDoPc + "! Congratz";
    
}
