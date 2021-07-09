class land {
constructor(x,y,width,height){
    var options={
        isStatic:true
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);


 rectMode(CENTER);
}

show(){
  //  "editor.autoClosingBrackets"= false,
  var pos = this.body.position;
 push();
 fill("brown");
 stroke("brown");
 rect(pos.x,pos.y,this.width,this.height);
 pop();




}




}