class Stone{
    constructor(x,y,radius){
      var options = {
            density:0.075
            
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);

       






    }
    show(){
        var pos = this.body.position;
       console.log(this.body.position.y);
       ellipse(pos.x,pos.y,this.radius);



    }












}