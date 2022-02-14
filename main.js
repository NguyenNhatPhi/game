let squareWay = document.querySelector(".square_way")
let squareWayLeftCoor = squareWay.getBoundingClientRect().left
let squareWayRightCoor = squareWay.getBoundingClientRect().right
let squareWayBottomCoor = squareWay.getBoundingClientRect().bottom
playGame({
    me:".mySquare",
    enemy:".enemy",
    entities:[
        myMove(".mySquare"),
        enemyMove(".enemy"),
    ]
})

function playGame(players){
    players.entities.forEach(function(func){
        func.commute()
    })
    function myScore(parentName,scoreName,bestScoreName){
            let score = document.querySelector(scoreName)
            let enemyBottomCoor = document.querySelector(players.enemy).getBoundingClientRect().bottom
            let mySquareTopCoor = document.querySelector(players.me).getBoundingClientRect().top
            console.log(enemyBottomCoor)
    }
    myScore(".score","#score","#bestScore")
}

function myMove(name){
    return{
        commute:function(){
            let me = document.querySelector(name)
            let mySquareCoor = me.getBoundingClientRect().left
            let moveCoor
            window.addEventListener("keydown",(e)=>{
                if(e.keyCode == 37){
                    mySquareCoor -= me.getBoundingClientRect().width + 3
                    moveCoor = mySquareCoor - squareWayLeftCoor
                    if(moveCoor < 0){
                        mySquareCoor += me.getBoundingClientRect().width + 3
                        moveCoor = mySquareCoor - squareWayLeftCoor
                    }
                    me.style.left = `${JSON.stringify(moveCoor)}px`
                    me.style.transform = "translateX(0px)"
                }if(e.keyCode == 39){
                    mySquareCoor += me.getBoundingClientRect().width + 3
                    moveCoor = mySquareCoor - squareWayLeftCoor
                    if(mySquareCoor - squareWayRightCoor >= 0){
                        mySquareCoor -= me.getBoundingClientRect().width + 3
                        moveCoor = mySquareCoor - squareWayLeftCoor
                    }
                    me.style.left = `${JSON.stringify(moveCoor)}px`
                    me.style.transform = "translateX(0px)"
                }
            })
        }
    }
}
function enemyMove(name){
    return{
        commute:function(){
           let enemy = document.querySelector(name)
           let enemyTopCoor = enemy.getBoundingClientRect().top
           let runCoor = 3 + 99*Math.floor(Math.random()*3)
           function moving(){
               enemyTopCoor += 5;
               enemy.style.top = `${JSON.stringify(enemyTopCoor)}px`
               enemy.style.left = `${JSON.stringify(runCoor)}px`
               if(enemyTopCoor > squareWayBottomCoor){
                    enemyTopCoor = 3
                    let x = Math.floor(Math.random()*3)
                    runCoor = 3 + 99*x
               }
           }
           let enemyRun = setInterval(moving,0.1)
        }
    }
}