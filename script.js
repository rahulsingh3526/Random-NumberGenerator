const number = document.querySelector(".count")
const button = document.querySelector(".button")

button.addEventListener("click",random)

function random(){
 const rand = Math.floor(Math.random() * 1000 +1);
    number.innerHTML = rand;
}