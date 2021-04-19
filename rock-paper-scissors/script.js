/*
function computerPlay(){
    var x = Math.floor((Math.random()* 3) +1);
    
    switch(x){
        case 1:
            console.log("rock");
            break;
        case 2:
            console.log("paper");
            break;
        case 3:
            console.log("scissors");
            break;
        default:
            console.log("lmao");
    }
}
*/
function computerPlay(){
    var x = Math.floor((Math.random()*3)+1);
    if(x===1){
        console.log("rock");
    } else if (x===2){
        console.log("paper");
    } else if (x===3) {
        console.log("scissors");
    } else {
        alert("gg");
    }
}