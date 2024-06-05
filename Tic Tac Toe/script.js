console.log("Welcome to Tic Tac Toe");
let music = new Audio("music/music.mp3")
let turn = new Audio("music/ting.mp3");
let gameover = new Audio("music/gameover.mp3")
let Turn = "X";
let isgameover = false;


//Function to change turn
const changeTurn = ()=>{
    return Turn ==="X"?"0":"X";
}
//Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="200px";
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText===''){
            boxtext.innerText = Turn;
            Turn = changeTurn();
            turn.play();
            checkWin();
           if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
           } 
        }
    })
})

//Add onlcick lister to reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    })
    Turn = "X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px";
})