class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.polygon2=loadImage("polygon.png")
    this.polygon
        this.pointB = pointB
        this.polygon = Constraint.create(options);
        World.add(world, this.polygon);
    }

    fly(){
        this.polygon.bodyA = null;
    }

    display(){
        image(this.polygon2,200,20)
    

    
}
}