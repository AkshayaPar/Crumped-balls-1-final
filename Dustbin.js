/*class Dustbin{
    constructor(x, y){
        
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var dustbinpos = this.body.position;
        translate(dustbinpos.x, dustbinpos.y);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        fill("green");
       
    }
}*/

class Dustbin {
    constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height,{isStatic:true});
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }