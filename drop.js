class Drop {
    constructor(x,y){
        var options = {
            friction:0.001,
            retitution:0.1,
        }
        this.drop = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.drop)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.drop.position;
        fill("blue")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
    update(){
        if(this.drop.position.y>height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
        }
    }
}
