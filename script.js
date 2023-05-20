const game = (()=>{
    let gameboard = document.getElementById("game");
    for(let i=0; i<9; i++){
        let box = document.createElement("div");
        box.style.border="1px solid black"
        box.style.height="130px"
        box.style.width="130px";
        box.style.fontSize = "110px"
        box.style.textAlign="center"
        box.setAttribute('id',`${i}`)
        box.addEventListener('click',()=>{
            Gameboard.gameboardArr[i]="x"
            gameboardfill();
        })
        gameboard.appendChild(box);
    }
    let Gameboard = {
        gameboardArr:["0", "0", "0", "0", "0", "0", "0", "0", "0"]
    }
    let gameboardfill = ()=>{
        let gameboardArr = Gameboard.gameboardArr
        for(let i = 0;i<gameboardArr.length;i++){
            let box = document.getElementById(i)
            if(gameboardArr[i]=="x"){
                box.innerHTML = "X"
            }
            else if(gameboardArr[i]=="o"){
                box.innerHTML = "O"
            }
            else{
                continue;
            }
        }
    }
    return{Gameboard,gameboardfill}
})();



