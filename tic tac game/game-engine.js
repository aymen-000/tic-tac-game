
var tour = "x";//to initilize our game with x player
document.getElementById('title').innerHTML = "X player turn "
var array = [];
//*********************our game functions */
// dele() to reapeat our game from zero
function dele(){
  for(let m=0 ; m<9 ; m++){
    document.getElementById('item'+m).style.backgroundColor ="crimson";
    document.getElementById('item'+m).style.cursor = "pointer";
    document.getElementById("item"+m).innerHTML = "" ;
    document.getElementById('title').innerHTML =  "X player turn "
  }
};
// we should make all the content od the buttums in an array 
function winner() {
  for (let i = 0  ; i < 9 ; ++i ){
    let elem = document.getElementById("item"+i).innerHTML ;//get the content of ith buttum 
    array[i] = elem ;
  }
  //if the x player winner or O player !!
  if (array[0] === array[1] && array[1]=== array[2] && array[0]!== "") {
    document.getElementById("title").innerHTML = "player "+array[0] + " win"
    turn = "z"
    let reapeat = confirm("player " + array[0] +  " do you want to reaprat");//to make sure that we want to reapeat the game
    if (confirm) {
      turn = "X" ;
      tour = "x"
      dele();
    }
  }
  else if (array[3] === array[4] && array[4]=== array[5] && array[3]!=="") {
    document.getElementById("title").innerHTML = "player "+array[0] + " win"
    turn = "z"
    let reapeat = confirm("player " + array[3] +  " do you want to reaprat");
    if (confirm) {
      turn = "X" ;
      tour ="x"
      dele();
    }
  }
  else if (array[6] === array[7] && array[7]=== array[8] && array[6]!=="") {
    document.getElementById("title").innerHTML = "player "+array[0] + " win"
    turn = "z"
    let reapeat = confirm("player " + array[6] +  " do you want to reaprat");
    if (confirm) {
      turn = "X" ;
      tour = "x"
      dele();
    }
  }
  else if (array[0] === array[4] && array[4]=== array[8] && array[0] !=="") {
    document.getElementById("title").innerHTML = "player "+array[0] + " win"
    turn = "z"
    let reapeat = confirm("player " + array[0] +  " do you want to reaprat");
    if (confirm) {
      turn = "X" ;
      tour ="x"
      dele();
    }
  }
  else if (array[2] === array[4] && array[4]=== array[6] && array[6]!=="") {
    document.getElementById("title").innerHTML = "player "+array[0] + " win"
    turn = "z"
    let reapeat = confirm("player " + array[2] +  " do you want to reaprat");
    if (confirm) {
      turn = "X" ;
      tour = "x"
      dele();
    }
  }
  else if (array[0] === array[3] && array[3]=== array[6] && array[0]!=="") {
    document.getElementById("title").innerHTML = "player "+array[0] + " win"
    turn = "z"
    let reapeat = confirm("player " + array[0] +  " do you want to reaprat");
    if (confirm) {
      turn = "X" ;
      tour = "x"
      dele();
    }
  }
  else if (array[1] === array[4] && array[4]=== array[7] && array[1]!=="") {
    document.getElementById("title").innerHTML = "player "+array[0] + " win"
    turn = "z"
    let reapeat = confirm("player " + array[1] +  " do you want to reaprat");
    if (confirm) {
      turn = "X" ;
      tour = "x"
      dele();
    }
  }
  else if (array[2] === array[5] && array[5]=== array[8] && array[2]!=="") {
    document.getElementById("title").innerHTML = "player "+array[0] + " win"
    turn = "z"
    let reapeat = confirm("player " + array[2] +  " do you want to reaprat");
    if (confirm) {
      turn = "X" ;
      tour = "x"
      dele();
    }
  }
  else {
    var quit = true //if the game null we quit 
    let i =0
    while(quit && i<10){
      if ( array[i] ==='')//test if all the buttums are full and no one win
      {
         quit = false
         console.log('l')
      } 
      else {
          i=i+1
      }
    }
    if(quit){
      let reapeat = confirm("nul" +  " do you want to reaprat")
      if (confirm) {
        turn = "X" ;
        tour = "x"
        dele();
      }
    }
  }
};
function game(id) {
  let element = document.getElementById(id) ; 
  if (element.innerHTML === "" && tour === "x" ) {
    element.innerHTML = "X"
    element.style.background = "black" ; 
    element.style.color = "white"
    element.style.cursor = "none";
    tour ="o"
    document.getElementById('title').innerHTML = "O player turn "
  }
  else if (element.innerHTML ==="" && tour === "o" ){
    element.innerHTML = "O"
    element.style.background = "orange" ;
    element.style.color= "white" 
    element.style.cursor = "none";
    tour ="x"
    document.getElementById('title').innerHTML = "X player turn ";
  }
  winner()
};

function ret(id){
  let conf = confirm('do you want to replay game from first')
  if(conf) {
    dele()
    tour = "x"
  }
}
