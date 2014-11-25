function vector(x,y){
  this.x =x;
  this.y =y;
  
  this.setpos = function(vec){
    this.x=vec.x;
    this.y=vec.y;
  };
  
}


function point(x,y,color){
  this.x = x;
  this.y = y;
  this.color = color;
  
  this.setpos = function(vec){
    this.x=vec.x;
    this.y=vec.y;
  };
  
  this.translate = function(vec){
    this.x+=vec.x;
    this.y+=vec.y;
  };
  
  this.draw = function(){
    ctx.fillStyle=this.color;
    ctx.fillRect(this.x, this.y, 1,1);
  }
  
}


function rect(vec1, vec2, color){
  this.x = vec1.x;
  this.y = vec1.y;
  this.height = vec2.x;
  this.width = vec2.y;
  this.color = color;
  
  this.draw = function(){
    ctx.fillStyle=this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  
  this.setpos = function(vec1,vec2){
    this.x=vec1.x;
    this.y=vec1.y;
    this.width=vec2.x;
    this.height=vec2.y;
    
    
  };
  
  this.translate = function(vec){
    this.x+=vec.x;
    this.y+=vec.y;
  };
  
}



/*

eColi

Bacteriophage

Robosomes

Plasmid

flagella

*/

function eColi(fixed,major){
  this.fixed = [fixed[0], fixed[1]];
  this.major = [major[0],major[1],major[2]];
  
  this.draw = function(currTime){
    this.fixed[0].draw();
    this.fixed[1].draw();
    this.major[0].draw();
    this.major[1].draw();
    this.major[2].draw();
  };
}


