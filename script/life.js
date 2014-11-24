function vector(x,y){
  this.x =x;
  this.y =y;
  
}

function point(x,y){
  this.x=x;
  this.y=y;
  
  this.translate = function(vec){
    this.x+=vec.x;
    this.y+=vec.y;
  };
  
}


function rect(a, b, h, w, color){
  this.x = a;
  this.y = b;
  this.height = h;
  this.width = w;
  this.color = color;
  
  this.draw = function(){
    ctx.fillStyle=this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
    console.log(Math.cos(currTime));
  };
}


