let gameboard = document.getElementById("game");
for(let i=0; i<9; i++){
    let box = document.createElement("div");
    box.style.border="1px solid black"
    box.style.height="130px"
    box.style.width="130px";
    gameboard.appendChild(box);
}