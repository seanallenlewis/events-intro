
var myButton = document.querySelector("#myButton")
var heading =document.querySelector("h1")

var toggle = null

//function yell(){
//  toggle = !toggle
//  console.log("WHY!?!?!?!")
//  heading.innerText = toggle
//}

function scream() {
  myButton.innerText = "What Is Gong On?"
}

function laugh() {
  myButton.innerText = "HA!"
}



//myButton.addEventListener('click', yell)
myButton.addEventListener('click', function() {
  toggle = !toggle
  console.log("WHY!?!?!?!")
  heading.innerText = toggle
})

heading.addEventListener('click', scream)
heading.addEventListener('mouseover', laugh)
