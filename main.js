// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const parentdiv=document.getElementById('modal')
const h2element=parentdiv.querySelector('h2')
parentdiv.classList.add('hidden')


const likeButton =document.querySelectorAll('.like-glyph');
likeButton.forEach ((buton)=>{
  buton.addEventListener('click',(e)=>{
 mimicServerCall()
  
   .then((data) =>{
   if (buton.textContent === EMPTY_HEART){
    buton.textContent=FULL_HEART ;
    buton.classList.add('activated-heart')
   }else{
    buton.textContent=EMPTY_HEART ;
    buton.classList.remove('activated-heart')
   }
  })
   .catch(error => {
    parentdiv.classList.remove('hidden');
    h2element.textContent=error
    
    setTimeout(function(){
      parentdiv.classList.add('hidden');
    
   },1000);
  })
    })

    
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
