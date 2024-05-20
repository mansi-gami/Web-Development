let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let msgContainer1 = document.querySelector(".msg-container1");
let msg1 = document.querySelector("#msg1");

let choice = document.querySelector(".choice");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

let turnO = false, turnX = false //playerX, playerO
choice.classList.remove("hd");

btn1.addEventListener("click",() =>{
    turnX = true;
    choice.classList.add("hd");
});
btn2.addEventListener("click",() =>{
    turnO = true;
    choice.classList.add("hd");
});

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = false;
    turnX = false;
    cnt = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    choice.classList.remove("hd");
};

let cnt = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turnO){
            box.innerText = "O";
            turnO = false;
            turnX = true;
            cnt++;
            box.disabled = true;
            
        }
        else if(turnX){
            box.innerText = "X";
            turnO = true;
            turnX = false;
            cnt++;
            box.disabled = true;
        } 
    
        if(cnt===9)
        {
            matchDraw();
        }
        checkWinner();
    });
});


const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};


const matchDraw = () => {
    
    msg.innerText = "Match is draw";
    msgContainer.classList.remove("hide");
    disabledBoxes();
};


const checkWinner = () => {
    for(pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText,
        // )

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }
    };
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);
btn.addEventListener("click",resetGame);