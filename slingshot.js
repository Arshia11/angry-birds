class Slingshot{

    constructor(body1,point){
        this.sling3Image=loadImage("sprites/sling3.png")
        var options={
            bodyA:body1,
            pointB:point,
            length:10,
            stiffness:0.04,

        

        }
this.sling=Constraint.create(options)
World.add(world,this.sling)
console.log(this.sling)


    }



    display(){
        
if(this.sling.bodyA){



        var pointA=this.sling.bodyA.position
    
        var pointB=this.sling.pointB

        stroke(48,22,8)
        if(pointA.x<265){
        strokeWeight(7)
        
     line (pointA.x-20,pointA.y,pointB.x-20,pointB.y+15)
     line(pointA.x-20,pointA.y,pointB.x+20,pointB.y+15)
     image (this.sling3Image,pointA.x-30,pointA.y-10,15,30)
        }
        else if (pointA.x>275){
            
            strokeWeight(3)
            line(pointB.x-20,pointB.y+20,pointA.x+20,pointA.y+5)
            line( pointB.x+20,pointB.y+15,pointA.x+20,pointA.y+5)
            image (this.sling3Image,pointA.x+22,pointA.y-5,15,30)
        }
}
    }

   fly(){
       this.sling.bodyA=null

   }
   attach(body1){
       this.sling.bodyA=body1


   }

}