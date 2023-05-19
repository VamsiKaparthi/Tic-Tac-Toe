let gameboard = document.getElementById("game");
for(let i=0; i<9; i++){
    let box = document.createElement("div");
    box.style.border="1px solid black"
    box.style.height="130px"
    box.style.width="130px";
    box.setAttribute('id',`box${i}`)
    gameboard.appendChild(box);
}

let gameboardArr = [0,0,0,0,0,0,0,0,0]

let gameboardfill = ()=>{
    for(let i = 0;i<gameboardArr.length;i++){
        if(gameboardArr[i]=="x"){

        }
    }
}
