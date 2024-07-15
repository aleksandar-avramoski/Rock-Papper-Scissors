let startPlaying = document.getElementById("playBtn");
var clickedNumberByPlayer;
var resultPC = 0;
var resultPlayer = 0;

startPlaying.onclick = function() {
    document.getElementById("beginningOfTheGame").style.display = "none";
    document.querySelector(".pick-gesture").style.display = "block";

    let rock = document.getElementById("rockDiv1");
    let papper = document.getElementById("papperDiv1");
    let scissors = document.getElementById("scissorsDiv1");

    let pickedGestureByPlayer = document.getElementById("gestureByPlayer");

    rock.addEventListener("click", function() {
        startCounting();
                
        clickedNumberByPlayer = 1;
                
        comparison(); 

        //PICKED GESTURE BY PLAYER
        pickedGestureByPlayer.style.backgroundImage = "url('Images/Rock-img-2.webp')";

        let timer = setTimeout(function() {
            document.querySelector(".battle").style.display = "none";
            document.querySelector(".pick-gesture").style.display = "block";
            
            if (resultPC === 3 || resultPlayer === 3) {
                winnerOfTheGame();
                clearTimeout(timer);

                resultPC = 0;
                resultPlayer = 0

                document.getElementById("rematch").onclick = function() {
                    //let timer1 = setTimeout(function() {
                        document.querySelector(".battle").style.display = "none";
                        document.querySelector(".pick-gesture").style.display = "block";
                        document.querySelector(".declaring-winner").style.display = "none";

                        if (resultPC === 3 || resultPlayer === 3) {
                            winnerOfTheGame();
                            clearTimeout(timer1);
                        }

                    //}, 1);                
                }
            }
        }, 3000);

    });

    papper.addEventListener("click", function() {
        startCounting();
            
        clickedNumberByPlayer = 2;
            
        comparison(); 

        //PICKED GESTURE BY PLAYER
        pickedGestureByPlayer.style.backgroundImage = "url('Images/Papper-img.jpg')";
    
        let timer = setTimeout(function() {
            document.querySelector(".battle").style.display = "none";
            document.querySelector(".pick-gesture").style.display = "block";
            
            if (resultPC === 3 || resultPlayer === 3) {
                winnerOfTheGame();
                clearTimeout(timer);

                resultPC = 0;
                resultPlayer = 0

                document.getElementById("rematch").onclick = function() {
                    //let timer1 = setTimeout(function() {
                        document.querySelector(".battle").style.display = "none";
                        document.querySelector(".pick-gesture").style.display = "block";
                        document.querySelector(".declaring-winner").style.display = "none";

                        if (resultPC === 3 || resultPlayer === 3) {
                            winnerOfTheGame();
                            clearTimeout(timer1);
                        }

                    //}, 3000);                
                }
            }
        }, 3000);

    });

    scissors.addEventListener("click", function() {   
        startCounting();

        clickedNumberByPlayer = 3;

        comparison();

        //PICKED GESTURE BY PLAYER
        pickedGestureByPlayer.style.backgroundImage = "url('Images/Scissors-img.jpg')"; 

        let timer = setTimeout(function() {
            document.querySelector(".battle").style.display = "none";
            document.querySelector(".pick-gesture").style.display = "block";
        
            if (resultPC === 3 || resultPlayer === 3) {
                winnerOfTheGame();
                clearTimeout(timer);

                resultPC = 0;
                resultPlayer = 0

                document.getElementById("rematch").onclick = function() {
                    //let timer1 = setTimeout(function() {
                        document.querySelector(".battle").style.display = "none";
                        document.querySelector(".pick-gesture").style.display = "block";
                        document.querySelector(".declaring-winner").style.display = "none";

                        if (resultPC === 3 || resultPlayer === 3) {
                            winnerOfTheGame();
                            clearTimeout(timer1);
                        }

                    //}, 3000);                
                }
            }

        }, 3000);

    });
}

//THE PROCCES SHOULD BE LONG 3 WINS BY PC OR PLAYER
function comparison() {

    let clickedNumberByPC = Math.floor(Math.random() * 3) + 1;

    let pickedGestureByPC = document.getElementById("gestureByPC");

    if (clickedNumberByPC === 1) {
        pickedGestureByPC.style.backgroundImage = "url('Images/Rock-img-2.webp')";
    } else if (clickedNumberByPC === 2) {
        pickedGestureByPC.style.backgroundImage = "url('Images/Papper-img.jpg')";
    }  else {
        pickedGestureByPC.style.backgroundImage = "url('Images/Scissors-img.jpg')";
    }

    let resultOfThePC = document.getElementById("PCresult");
    let resultOfThePlayer = document.getElementById("playerResult");

    if (clickedNumberByPC === 1 && clickedNumberByPlayer === 1 || 
        clickedNumberByPC === 2 && clickedNumberByPlayer === 2 || 
        clickedNumberByPC === 3 && clickedNumberByPlayer === 3) {
        document.getElementById("displayingResult").innerText = "Draw!";
        
    } else if (clickedNumberByPC === 1 && clickedNumberByPlayer === 3 || 
        clickedNumberByPC === 2 && clickedNumberByPlayer === 1 || 
        clickedNumberByPC === 3 && clickedNumberByPlayer === 2) {
        resultPC++;
        document.getElementById("displayingResult").innerText = "+1 for Computer!";

    } else if (clickedNumberByPC === 3 && clickedNumberByPlayer === 1 || 
        clickedNumberByPC === 2 && clickedNumberByPlayer === 3 || 
        clickedNumberByPC === 1 && clickedNumberByPlayer === 2) {
        resultPlayer++;
        document.getElementById("displayingResult").innerText = "+1 for Player!";
    } 

    resultOfThePC.innerText = resultPC;
    resultOfThePlayer.innerText = resultPlayer;
}

function startCounting() {

    document.querySelector(".pick-gesture").style.display = "none";
    
    let numberCounter = document.getElementById("counter");
    numberCounter.style.display = "block";
    
    function countdown(i) {
        if (i >= 0) {
            numberCounter.innerText = i;

            if (i === 3) {
                numberCounter.style.color = "Orange";
            } else if (i === 2) {
                numberCounter.style.color = "Lightblue";
            } else if (i === 1) {
                numberCounter.style.color = "Yellow";
            } else {
                numberCounter.style.color = "GreenYellow";
                numberCounter.style.display = "none"

                document.querySelector(".battle").style.display = "flex";
            }

            setTimeout(() => countdown(i - 1), 400);
        }
    }
    
    countdown(3);
}

function winnerOfTheGame() {
    let winnerOfTheGame = document.getElementById("winner");

    if (resultPC === 3) {    
        document.querySelector(".battle").style.display = "none";
        document.querySelector(".pick-gesture").style.display = "none";
        document.querySelector(".declaring-winner").style.display = "flex";
        document.getElementById("counter").style.display = "none";
        winnerOfTheGame.innerText = "Computer";
    
    } else if (resultPlayer === 3) {
        document.querySelector(".battle").style.display = "none";
        document.querySelector(".pick-gesture").style.display = "none";
        document.querySelector(".declaring-winner").style.display = "flex";
        document.getElementById("counter").style.display = "none";
        winnerOfTheGame.innerText = "Player";
    }
}
