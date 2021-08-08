function roller(){
    var p1 = Math.floor((Math.random()*6))+1;
    var p2 = Math.floor((Math.random()*6))+1;
    var winner;
    if(p1>p2) winner = "Winner:Player-1";      
    else if(p1==p2) winner = "Match-draw";
    else winner="Winner:Player-2"
    document.querySelector(".winner h1").textContent=winner;
    // for player 1:
    switch(p1) {
        case 1:{
            for(var i=0;i<9;i++){
                document.querySelectorAll(".dice1 .dot")[i].style.visibility="hidden";
            }
            document.querySelector(".dice1 .dot5").style.visibility="visible";
            break;
        }
        case 2:{
            for(var i=0;i<9;i++){
                document.querySelectorAll(".dice1 .dot")[i].style.visibility="hidden";
            }
            document.querySelector(".dice1 .dot4").style.visibility="visible";
            document.querySelector(".dice1 .dot6").style.visibility="visible";
            break;
        }
        case 3:{
            for(var i=0;i<9;i++){
                document.querySelectorAll(".dice1 .dot")[i].style.visibility="hidden";
            }
            document.querySelector(".dice1 .dot5").style.visibility="visible";
            document.querySelector(".dice1 .dot4").style.visibility="visible";
            document.querySelector(".dice1 .dot6").style.visibility="visible";
            break;
        }
        case 4:{
            for(var i=0;i<9;i++){
                document.querySelectorAll(".dice1 .dot")[i].style.visibility="hidden";
            }
            document.querySelector(".dice1 .dot1").style.visibility="visible";
            document.querySelector(".dice1 .dot3").style.visibility="visible";
            document.querySelector(".dice1 .dot7").style.visibility="visible";
            document.querySelector(".dice1 .dot9").style.visibility="visible";
            break;
        }
        case 5:{
            for(var i=0;i<9;i++){
                document.querySelectorAll(".dice1 .dot")[i].style.visibility="hidden";
            }
            document.querySelector(".dice1 .dot5").style.visibility="visible";
            document.querySelector(".dice1 .dot1").style.visibility="visible";
            document.querySelector(".dice1 .dot3").style.visibility="visible";
            document.querySelector(".dice1 .dot7").style.visibility="visible";
            document.querySelector(".dice1 .dot9").style.visibility="visible";
            break;
        }
        case 6:{
            for(var i=0;i<9;i++){
                document.querySelectorAll(".dice1 .dot")[i].style.visibility="hidden";
            }
            document.querySelector(".dice1 .dot1").style.visibility="visible";
            document.querySelector(".dice1 .dot3").style.visibility="visible";
            document.querySelector(".dice1 .dot7").style.visibility="visible";
            document.querySelector(".dice1 .dot9").style.visibility="visible";
            document.querySelector(".dice1 .dot4").style.visibility="visible";
            document.querySelector(".dice1 .dot6").style.visibility="visible";
            break;
        }
    }
    switch(p2) {
        case 1:{
            for(var i=0;i<9;i++){
                document.querySelectorAll(".dice2 .dot")[i].style.visibility="hidden";
            }
            document.querySelector(".dice2 .dot5").style.visibility="visible";
             break;
        }
        case 2:{
            for(var i=0;i<9;i++){
                document.querySelectorAll(".dice2 .dot")[i].style.visibility="hidden";
            }
            document.querySelector(".dice2 .dot4").style.visibility="visible";
            document.querySelector(".dice2 .dot6").style.visibility="visible";
            break;
        }
        case 3:{
            for(var i=0;i<9;i++){
                document.querySelectorAll(".dice2 .dot")[i].style.visibility="hidden";
            }
            document.querySelector(".dice2 .dot5").style.visibility="visible";
            document.querySelector(".dice2 .dot4").style.visibility="visible";
            document.querySelector(".dice2 .dot6").style.visibility="visible";
            break;
        }
        case 4:{
            for(var i=0;i<9;i++){
                document.querySelectorAll(".dice2 .dot")[i].style.visibility="hidden";
            }
            document.querySelector(".dice2 .dot1").style.visibility="visible";
            document.querySelector(".dice2 .dot3").style.visibility="visible";
            document.querySelector(".dice2 .dot7").style.visibility="visible";
            document.querySelector(".dice2 .dot9").style.visibility="visible";
            break;
        }
        case 5:{
            for(var i=0;i<9;i++){
                document.querySelectorAll(".dice2 .dot")[i].style.visibility="hidden";
            }
            document.querySelector(".dice2 .dot5").style.visibility="visible";
            document.querySelector(".dice2 .dot1").style.visibility="visible";
            document.querySelector(".dice2 .dot3").style.visibility="visible";
            document.querySelector(".dice2 .dot7").style.visibility="visible";
            document.querySelector(".dice2 .dot9").style.visibility="visible";
            break;
        }
        case 6:{
            for(var i=0;i<9;i++){
                document.querySelectorAll(".dice2 .dot")[i].style.visibility="hidden";
            }
            document.querySelector(".dice2 .dot4").style.visibility="visible";
            document.querySelector(".dice2 .dot6").style.visibility="visible";
            document.querySelector(".dice2 .dot1").style.visibility="visible";
            document.querySelector(".dice2 .dot3").style.visibility="visible";
            document.querySelector(".dice2 .dot7").style.visibility="visible";
            document.querySelector(".dice2 .dot9").style.visibility="visible";
            break;
        }
    }
    //for player 2:
}