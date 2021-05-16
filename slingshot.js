class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        

        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    fly(){
        this.polygon.bodyA = null;
    }

display(){
    

    if(this.polygon.bodyA){
        var pointA = this.polygon.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(rgb(48,22,8));
        
    
        if(pointA.x < 220) { 
          strokeWeight(7); 
          line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y); 
          line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3); 
          image(this.slingshot,pointA.x -30, pointA.y -10,15,30); 
        } 
        else{ 
            strokeWeight(3); 
            line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y); 
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3); 
            image(this.slingshot,pointA.x + 25, pointA.y -10,15,30);
        }
       
    
    }
}

}