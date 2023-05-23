const game = (()=>{
    let gameboard = document.getElementById("game");
    let counter=0;
    for(let i=0; i<9; i++){
        let box = document.createElement("div");
        box.style.border="1px solid black"
        box.style.height="130px"
        box.style.width="130px";
        box.style.fontSize = "110px"
        box.style.textAlign="center"
        box.setAttribute('id',`${i}`)
        box.addEventListener('click',()=>{
            //if grid place is empty or not 
            if(checkEmpty){
                if(Gameboard.gameboardArr[i]=="0"){
                    if(counter%2==0){
                        Gameboard.gameboardArr[i]="x"
                        counter++;
                    }
                    else{
                        Gameboard.gameboardArr[i]="o"
                        counter++;
                    }
                }
            }
            //gameboardfill();
            console.log(Gameboard.gameboardArr)
            console.log(logic())
            
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
    let logic = ()=>{
        let arr = Gameboard.gameboardArr
        
        for(let i=0; i<3; i++){
            //rows
            if(arr[i]==arr[i+3]&&arr[i]==arr[i+6]){
                if(arr[i]=="x"||arr[i]=="o"){
                    return(arr[i]);
                }
                
            }
        }
        //columns
        for (let i=0;i<6;i++){
            if(i==0||i==3||i==6){
                if(arr[i]==arr[i+1]&&arr[i]==arr[i+2]){
                    if(arr[i]=="x"||arr[i]=="o"){
                        return(arr[i]);
                    }
                    
                }
            }
        }
        //right leaning diagonal
        if(arr[0]==arr[4]&&arr[4]==arr[8]){
            if(arr[0]=="x"||arr[0]=="o"){
                return arr[0];
            }
        }

        //left leaning diagonal
        if(arr[2]==arr[4]&&arr[4]==arr[6]){
            if(arr[2]=="x"||arr[2]=="o"){
                return arr[2]
            }
        }
        return("match continues")
        
    }
    let checkEmpty = ()=>{
        let arr = Gameboard.gameboardArr
        for(let i = 0; i<9;i++){
            if(arr[i]=='0'){
                return true;
            }
        }
        return false;
    }
    return{Gameboard,gameboardfill,logic}
})();

//const playerFactory=()

