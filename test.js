const arrowLeft = document.querySelector(".arrowLeft")
const arrowRight = document.querySelector(".arrowRight")
const hamburger = document.querySelector(".hamburger")
const menuList = document.querySelector("dl");
const picture = document.querySelector(".menuPics img")
const name1 = document.querySelector("#name")/*To prevent the same name of Js function or something(name)*/ 
const id = document.querySelector("#id")
const pass = document.querySelector("#pass")
const idInput = document.querySelector("#idInput")
const passInput = document.querySelector("#passInput")
const nameInput = document.querySelector(".nameInput")

var linkPic = ["image/salad.png","image/lemonade.png","image/bakery.png"]
var mealTitle = ["Main dish","Beverage","Dessert"]
var introMenu = ["This meal will interest you, attract you and should slowly taste this to enjoy your meal","This beverage will interest you, attract you and should slowly taste this to enjoy your beverage","This dessert will interest you, attract you and should slowly taste this to enjoy your dessert"]
var i = 0
var costumerId = Math.ceil(Math.random()*999999999)
var costumerPassword = Math.floor(Math.random()*999999999)

picture.style.height = "150px"
    picture.style.width = "320px"
arrowRight.addEventListener("click",()=>{
    i++
    if(i==3){
        i=0
    }
    picture.src = linkPic[i]
    document.querySelector(".menuIntro h1").innerText = mealTitle[i]
    document.querySelector(".menuIntro p").innerText = introMenu[i]
})
arrowLeft.addEventListener("click",()=>{
    i--
    if(i==-1){
        i=2
    }
    picture.src = linkPic[i]
    document.querySelector(".menuIntro h1").innerText = mealTitle[i]
    document.querySelector(".menuIntro p").innerText = introMenu[i]
})
function menu(){
    menuList.classList.toggle("toggle1")
}
function clickOk(){
    if(idInput.value == costumerId && passInput.value == costumerPassword){
        alert("You'll be called for your meal soon")
        alert("Please wait us for 30 seconds")
    }else{
        alert("Sorry, your password is wrong")
    }
}
function clickSubmit(){
    name1.innerText = "Your name: " + nameInput.value
    id.innerText = "Your id: " + costumerId
    pass.innerText = "Your password: " + costumerPassword
}
console.log(window.innerWidth)
