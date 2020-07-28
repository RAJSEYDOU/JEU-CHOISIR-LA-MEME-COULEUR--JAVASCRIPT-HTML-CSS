

const squares= document.querySelectorAll('.grid div')
const scoreInner= document.querySelector('.score')
let data=[{
  id:0,
  couleur:"blue",
  name:"bleu"
},{
  id:1,
  couleur:"blue",
  name:"bleu"
},{
  id:2,
  couleur:"green",
  name:"vert"
},{
  id:3,
  couleur:"green",
  name:"vert"
},{
  id:4,
  couleur:"black",
  name:"noir"
},{
  id:5,
  couleur:"black",
  name:"noir"
},{
  id:6,
  couleur:"yellow",
  name:"jaune"
},{
  id:7,
  couleur:"yellow",
  name:"jaune"
},{
  id:8,
  couleur:"red",
  name:"rouge"
},{
  id:9,
  couleur:"red",
  name:"rouge"
},{
  id:10,
  couleur:"grey",
  name:"gris"
},{
  id:11,
  couleur:"grey",
  name:"gris"
},{
  id:12,
  couleur:"orange",
  name:"orange"
},{
  id:13,
  couleur:"orange",
  name:"orange"
},{
  id:14,
  couleur:"purple",
  name:"violet"
},{
  id:15,
  couleur:"purple",
  name:"violet"
}]


// You should pick up two element
 let chosenCard=[]
 let chosenCardId=[]
 let won=[]
 let score=0;


// get all squares

const sort=data.sort(()=>0.5-Math.random())
// console.log(0.5*Math.random())

// DRAW A WHITE SQUARES ON BOARD
for (let i=0;i<sort.length;i++){
     // SET TO EACH OF THEM COLOR WHITE
   squares[i].style.backgroundColor="white"
   // ADD TO EACH OF THEM CLICK EVENT ALLOW US TO FLIP SQUARE
   squares[i].addEventListener('click',flip)
  

}

function flip(){

 const id=this.getAttribute('data-id')
// IF CHOSENCARD DON'T CONTAINS 2 ELEMENTS EXEMPLE:1
// PUSH  CHOSENCARD   && PUSH  CHOSENCARDID
  if(chosenCard.length<2){
// PUSHING CHOSENCARD INTO CHOSENCARD FOR CHECKING
      chosenCard.push({
      couleur:data[id].couleur,
      name:data[id].name

      })

// PUSHING CHOSENCARDID INTO CHOSSEN CARDID FOR CHECKING
      chosenCardId.push(id)
// CHEKING IF BOTH  TWO NUMBER HAVE SAME COULEUR
    cheking()
     
  }
// IF CHOSENCARD CONTAINS MORE THAN 2 THEN SET IT TO EMPTY ARRAY[]
// IF CHOSENCARDID CONTAINS MORE THAN 2 THEN SET IT TO EMPTY ARRAY[]
  else  {
// WIPE CHOSENCARD
  chosenCard=[]
// WIPE CHOSENCARDID
  chosenCardId=[]
// PUSH CHOSENCARD
   chosenCard.push({
    id:id,
    couleur:data[id].couleur,
    name:data[id].name

    })
// PUSH CHOSENCARD
   chosenCardId.push(id)
  }
 


// IF ONE IS VERIFIED SET THE BACKGROUND COLOR TO DATA[id].COULEUR
   this.style.backgroundColor=sort[id].couleur


   
}



function cheking(){
 // GET CHOOSENCARDID ONE && TWO
 console.log(chosenCardId)
 const id=chosenCardId[0]
 const id2=chosenCardId[1]

 // IF CHOOSEN ID ==2 WHICH IS OK && CHOSENCARD[0].COULEUR==CHOSENCARD[1].COULEUR


  if(chosenCard.length==2 ){

    if(chosenCard[0].couleur==chosenCard[1].couleur){
       
// IF BOTH PICK UP SQUARES HAVE SAME ID WHICH MEAN USER HAS CLICKED ON THE 
// IN SQUARE SELF
      if(chosenCardId[0]==chosenCardId[1]){
// REMOVE ONE SQUARE
      chosenCard.pop()
// REMOVE ONE SQUARE ID
      chosenCardId.pop()
      console.log("inside")

      }

// ELSE SHOW IT'S MATCHED
      else{
// FUNCTION WIN CONDITION ABOVE
      woncondition()
      alert('won')
    }
      
    }
    
    else{
      // IF NO MATCH SQUARES HIDE BOTH SQARES BY A WHITE BACKGROUND
      // IT'S  IMPORTANT TO UNDERSTAND THAT FUNCTION WAITING 500ms BEFORE CALLING
setTimeout(function(){

  // SET PICK UP ONE BACKGROUND COLOR TO WHITE
          squares[id].style.backgroundColor="white"
  // SET PICK UP TWO BACKGROUND COLOR TO WHITE
          squares[id2].style.backgroundColor="white"
        },500)
    }

}


}


// WON FUNCTION
 function woncondition(){
   
// IF WON ==DATA/2 =8 
  if(won.length>=data.length/2){
    // ALERT GAME OVER YOU WON
    alert('GAME OVER YOU WON',score +" "+ "POINTS")
  }
// GAME KEEP RUNNING
  else{
    // SCORE +2
    score+=2;
    // OUTPUT SCORE
   scoreInner.innerHTML=score + " " +"Points" ;

   // STORE CHOSENCARD ON WON ARRAY
    won.push(chosenCard)
  }

 }

