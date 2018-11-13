let ball = document.querySelector("#ball")
let gameBox = document.querySelector("#gameBox")
let output = document.querySelector("#output")
let endBox = document.querySelector("#endBox")


let maxX = gameBox.clientWidth - ball.clientWidth
let maxY = gameBox.clientHeight - ball.clientHeight

window.addEventListener('deviceorientation', function (e){
    let x = e.beta
    let y = e.gamma

    output.innerHTML = "beta: " + x + "\n"
    output.innerHTML = "gamma: " + y + "\n"


    if (x > 90){x = 90}
    if (x < -90){x = -90}
    
    x += 90
    y += 90

    ball.style.top = (maxX*x/180) + "px"
    ball.style.left = (maxY*y/180) + "px"

    

})
