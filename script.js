const game = (()=>{
    let gameboard = document.getElementById("game");
    let px = document.getElementById("x")
    let po = document.getElementById("o")
    let Gameboard = {
        gameboardArr:["0", "0", "0", "0", "0", "0", "0", "0", "0"],
        counter:0
    }
    let gameboardfill = ()=>{
        let gameboardArr = Gameboard.gameboardArr
        for(let i = 0;i<gameboardArr.length;i++){
            let box = document.getElementById(i)
            if(gameboardArr[i]=="x"){
                box.innerHTML = `<span style="color:#0089BA">X</span>`
            }
            else if(gameboardArr[i]=="o"){
                box.innerHTML = `<span style="color:rgb(107, 107, 138)">O</span>`
            }
            else{
                box.innerHTML="";
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

    
    document.getElementById("start").addEventListener('click',()=>{
        console.log(Gameboard.gameboardArr)
        if(document.getElementById("start").innerHTML=="Start a new game"){
            po.style.borderBottom = "none"
            Gameboard.counter=0
            Gameboard.gameboardArr=["0", "0", "0", "0", "0", "0", "0", "0", "0"]
            document.getElementById("win").style.display="none";
            document.getElementById("start").innerHTML="Restart"
            for(let i=0; i<9; i++){
                let box = document.createElement("div");
                box.style.border="1px solid black"
                box.style.height="130px"
                box.style.width="130px";
                box.style.fontSize = "110px"
                box.style.fontFamily="sans-serif"
                box.style.fontWeight="600"
                box.style.textAlign="center"
                box.setAttribute('id',`${i}`)
                px.style.borderBottom = "4px solid #0089BA"
                box.addEventListener('click',()=>{
                    //if grid place is empty or not 
                    if(checkEmpty()){
                        console.log(Gameboard.counter)
                        if(Gameboard.gameboardArr[i]=="0"){
                            if(Gameboard.counter%2==0){
                                px.style.borderBottom = "none"
                                po.style.borderBottom = "4px solid rgb(107, 107, 138)"
                                Gameboard.gameboardArr[i]="x"
                                Gameboard.counter++;
                            }
                            else{
                                po.style.borderBottom = "none"
                                px.style.borderBottom = "4px solid #0089BA"
                                Gameboard.gameboardArr[i]="o"
                                Gameboard.counter++;
                            }
                        }
                    }
                    gameboardfill();
                    console.log(Gameboard.gameboardArr)
                    if(logic()=="x"||logic()=="o"){
                        console.log(logic());
                        let player = (logic()).toUpperCase()
                        for(let i=0;i<9;i++){
                            let box = document.getElementById(`${i}`)
                            document.getElementById('game').removeChild(box);                
                        }
                        document.getElementById("win").style.display= "flex";
                        document.getElementById("win").innerHTML = ` Player ${player} has won the game`
                        document.getElementById("start").innerHTML="Start a new game"
                    }
                    else if(checkEmpty()==false){
                        for(let i=0;i<9;i++){
                            let box = document.getElementById(`${i}`)
                            document.getElementById('game').removeChild(box);                
                        }
                        console.log('tie')
                        document.getElementById("win").style.display= "flex";
                        document.getElementById("win").innerHTML = "It's a Tie"
                        document.getElementById("start").innerHTML="Start a new game"
                    }
                    
                })
                gameboard.appendChild(box);
            }
        }
        else if(document.getElementById("start").innerHTML=="Restart"){
            px.style.borderBottom = "4px solid rgb(107, 107, 138)"
            po.style.borderBottom = "none"
            Gameboard.counter=0;
            Gameboard.gameboardArr=["0", "0", "0", "0", "0", "0", "0", "0", "0"]
            gameboardfill()
        }
         
    })
    return{Gameboard,gameboardfill,logic}
})();




