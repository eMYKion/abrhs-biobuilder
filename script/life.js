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

function line(p1, p2){
  this.p1 = new point(p1.x, p1.y,"#000000");
  this.p2 = new point(p2.x, p2.y, "#000000");
  
  this.distance = function(){
    return Math.sqrt( Math.pow(this.p1.x-this.p2.x, 2), Math.pow(this.p1.y-this.p2.y, 2) );
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
  
  this.dop = Math.sqrt(Math.pow((this.major[0].x-this.major[0].y),2)+Math.pow((this.major[2].x-this.major[2].y),2));
  
  
  
  
  this.draw = function(currTime){
    
    //currTime => radians
    var rad = Math.cos(currTime);
    
    
    var fixedMid = new point(  (this.fixed[0].x+this.fixed[1].x)/2 , (this.fixed[0].y+this.fixed[1].y)/2 ,"#000000");
    
    var fixedLine = new line(this.fixed[0], this.fixed[1]);
    
    var r = fixedLine.distance()/(2*Math.sin(rad/2));
    
    ctx.strokeStyle = "#00ff00";
    ctx.beginPath();
    ctx.arc( fixedMid.x+Math.cos(rad/2)*r,fixedMid.y,r,Math.PI+rad,Math.PI-rad);
    ctx.stroke();
    
    this.fixed[0].draw();
    this.fixed[1].draw();
    this.major[0].draw();
    this.major[1].draw();
    this.major[2].draw();
  };
  
  
}


