let computerNumber
let userNumbers = []

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}


function compareNumbers(){
   const userNumber = Number(document.getElementById('inputBox').value)
   userNumbers.push('' + userNumber)
   document.getElementById('guesses').innerHTML = userNumbers


   if(userNumber > computerNumber){
    document.getElementById('textOutput').innerHTML = 'Seu número está muito alto'

   }
   else if(userNumber < computerNumber){
    document.getElementById('textOutput').innerHTML = 'Seu número está muito baixo'

   }
   else{
    document.getElementById('textOutput').innerHTML = 'Parabéns!!!'

   }

}