class link {
    constructor(bodyA){
       
        var lastLink = bodyA.body.bodies.length-2;
     this.link =  Constraint.create({
         bodyA:bodyA.body.bodies[lastLink],
         pointA:{x:0,y:0},
         pointB: {x:600,y:200},
         length:10,
         stiffness:0.8

      }
      )

      World.add(world,this.link);








    }





}