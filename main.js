function l (cont){
    console.log(cont)
}

let canvas = {
    start(){
        this.src = document.querySelector("#gameBox");
        this.ctx = this.src.getContext('2d');        
    },
    clear(){
        this.ctx.clearRect(0,0,this.src.width, this.src.height);
    }
}

canvas.start();

class Ball {
    //create ball with four parameters
    constructor(x, y, radius, color, isControlable) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.vX = 0;
        this.vY = 0;
        if(isControlable)
            window.addEventListener('deviceorientation', this.handleOrientation);
    }

    //drawing ball on canvas
    fill() {
        canvas.ctx.beginPath();
        canvas.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        canvas.ctx.fillStyle = this.color;
        canvas.ctx.fill();
        canvas.ctx.stroke();
    }

    //set speed of ball movment
    setV(vX,vY){
        this.vX = 0;
        this.vY = 0;
        this.vX = vX;
        this.vY = vY;
    }

    //update x and y position
    move() {        
        this.x += this.vX;
        this.y += this.vY;      
    }

    //execute function
    update(){
        this.move()
        this.boxCollision()        
        this.fill()
    }

    //check if ball is collding w with bounds of canvas
    boxCollision(){
        if((this.x - this.radius) <= 0)
            this.x = 0 + this.radius;
        if((this.x + this.radius) >= canvas.src.width)
            this.x = canvas.src.width - this.radius;
        if((this.y - this.radius) <= 0)
            this.y = this.radius;
        if((this.y + this.radius) >= canvas.src.height)
            this.y = canvas.src.height - this.radius;
    }

    //get gamma and beta 
    handleOrientation(e) {
        let x = e.gamma;
        let y = e.beta;
    
        output.innerHTML = "beta :" + x + "\n";
        output.innerHTML += "gamma :" + y + "\n";

        ball.setV(x/3,y/3);
        
        output.innerHTML += "beta V:" + ball.vX + "\n";
        output.innerHTML += "gamma V:" + ball.vY + "\n";
        
    }
}

let ball = new Ball(canvas.src.height/2, canvas.src.width /2, 20, 'red', true);
let ball2 = new Ball(0,0,20,'black', false);

//update all game (moving, collision, drawing)
function update(){
    canvas.clear();
    ball.update()
    ball2.update();
}

let interval = setInterval(function(){update()},1000/60);
















