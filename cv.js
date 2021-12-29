const square = document.querySelectorAll(".square")
const button = document.querySelector("button")
const progress = document.querySelector("progress")
const h1 = document.querySelector("h1")
const loading = document.querySelector(".loading")
const container = document.querySelector(".container")
var clear;
function player1(i){
    square[i].innerText = "X"
}
function player2(i){
    square[i].innerText = "O"
}
function loading1(){
    progress.value++
    h1.innerText = "Loading...." + progress.value + "%"
    if(progress.value == progress.max){
        clearInterval(clear)
        loading.style.display = "none"
        container.style.display = "flex"
    }
}
button.addEventListener("click",()=>{
    button.style.display = "none"
    loading.style.display = "inline"
    clear = setInterval(loading1,100)
})