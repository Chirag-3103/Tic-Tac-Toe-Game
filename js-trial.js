let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".winnerText");
let turnO = true;
let nGame = document.querySelector(".newGame");
let reBtn = document.querySelector("#resetBtn");

// winning pattern list outside this the winner cannot be decided
let winPatterns = [
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row

    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column

    [0, 4, 8], // Diagonal
    [2, 4, 6]  // Diagonal
];


const checkPattern = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!= "" && pos2Val!= "" && pos3Val!= ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val ){
            winner.innerText = "Won";
            nGame.classList.remove("hide");
            boxes.forEach((box)=>{
                box.disabled = true;
            });
        }
    }
    }
};

// this is used for the new game button
nGame.addEventListener("click", () =>{
    nGame.classList.add("hide");
    winner.innerText = "Tic-Tac-Toe";
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
});

// code for the reset button
reBtn.addEventListener("click", () =>{
    nGame.classList.add("hide");
    winner.innerText = "Tic-Tac-Toe";
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    });
});

// clickable section code 
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkPattern();
    });
});

