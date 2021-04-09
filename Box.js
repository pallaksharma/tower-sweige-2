class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :1.0,
          density:1.0
}

      this.x=x;
      this.y=y;
      this.visiblity =255;
      this.height = height;
      this.width = width;
      this.body = Bodies.rectangle(x, y, width, height, options);
     
       
      World.add(world, this.body);
      
    }
    display(){
     if (this.body.speed<7){
         var pos=this.body.position;
         var angle=this.body.angle;
         push();
        
         rotate(angle);
         rectMode(CENTER);
         strokeWeight(4);
         stroke(0);
         fill("turquoise");
         rect(0,0,this.widht,this.height);
         pop();
     }
     else{
         World.remove(world,this.body);
         push();
         this.visibilty=this.visibility-5;
         pop();
     }
        
    }

}
    
