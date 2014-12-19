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
  /*
  this.rotate = function(center, phi){
    
    var dist = Math.sqrt(Math.pow((this.x-center.x),2)+Math.pow((this.y-center.y),2));
    
    var theta = Math.atan((this.x-center.x)/(this.y-center.y));
    
    var x1 = Math.cos(theta + phi)*dist;
    
    var y1 = Math.sin(theta + phi)*dist;
    
    this.setpos(new vector(x1,y1));
  }
  */
  
}

function line(p1, p2){
  this.p1 = new point(p1.x, p1.y,"#000000");
  this.p2 = new point(p2.x, p2.y, "#000000");
  
  this.distance = function(){
    return Math.sqrt( Math.pow(this.p1.x-this.p2.x, 2)+ Math.pow(this.p1.y-this.p2.y, 2) );
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

Bacteriophage?

Ribosomes?

Plasmid?

flagella?

*/

function eColi(fixed/*,major*/){
  this.fixed = [fixed[0], fixed[1]];
  //this.major = [major[0],major[1],major[2]];
  
  //this.dop = Math.sqrt(Math.pow((this.major[0].x-this.major[0].y),2)+Math.pow((this.major[2].x-this.major[2].y),2));
  
  this.offset = 100*Math.random();
  
  
  this.draw = function(currTime){
    
    //currTime => radians
    
    var rad = -1*Math.abs(Math.cos(2*Math.PI*((5*(currTime+this.offset)))/360+Math.PI/2))-0.01;
    //console.log(Math.round(rad/Math.PI*100)/100+"pi");
    
    var fixedMid = new point(  (this.fixed[0].x+this.fixed[1].x)/2 , (this.fixed[0].y+this.fixed[1].y)/2 ,"#000000");
    
    var fixedLine = new line(this.fixed[0], this.fixed[1]);
    
    var r = Math.abs(fixedLine.distance()/(2*Math.sin(rad/2)));
    
    //to fix "exploding radius"
    
    
    
    
    ctx.beginPath();
    
    ctx.arc(fixedMid.x+Math.cos(rad/2)*r, fixedMid.y, r, Math.PI+rad, Math.PI-rad, false);
    
    
    //currTime%10==0?console.log(r):console.log("000");
    ctx.lineWidth = 1;
    
    // line color
    ctx.strokeStyle = "#3dff99";
    ctx.stroke();
    /*
    this.fixed[0].draw();
    this.fixed[1].draw();
    this.major[0].draw();
    this.major[1].draw();
    this.major[2].draw();
    */
  };
  
  this.biasX = Math.random()-0.5;
  this.biasY = Math.random()-0.5;
  
  this.mingle = function(){
    var X = Math.random()-0.5;
    var Y = Math.random()-0.5;
    this.fixed[0].x+=this.biasX/10+X/10;
    this.fixed[0].y+=this.biasY/10+Y/10;
    this.fixed[1].x+=this.biasX/10+X/10;
    this.fixed[1].y+=this.biasY/10+Y/10;
    
    this.fixed[0].x%=CanX;
    this.fixed[0].y%=CanY;
    this.fixed[1].x=this.fixed[0].x;
    this.fixed[1].y=this.fixed[0].y+5;
    
    
    
  }
  
  
}


