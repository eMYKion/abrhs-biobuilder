CanX = canvas.width;
CanY = canvas.height;
dimen = 12;
dimen2 = Math.pow(12,2);
var fillCanvasBox = new rect(new vector(0,0), new vector(canvas.height,canvas.width),"#000000");

var culture = new Array(dimen);


var incrX = CanX/dimen;
var incrY = CanY/dimen;
for(var i=0;i<dimen;i+=1){
  
  culture[i]= new Array(dimen);
  
  for(var j=0;j<dimen;j+=1){
    
    culture[i][j] = new eColi( [ new point(incrX*(j+1/2),incrY*(i+1/2),"#ffffff"), new point(incrX*(j+1/2),incrY*(i+1/2)+5,"#ffffff") ] );
  }
}

var time = 0;

//var p = new point(110,100,"#ffffff");

fillCanvasBox.draw();
function render(){
  
  fillCanvasBox.draw();
  /*
  ctx.font="10px Georgia";
  ctx.fillStyle="#ff00ff";
  ctx.fillText("<- this is the draft model for a bacteria!",80,40);
  */
  
  //p.draw();
  //p.rotate(new point(110,110,"#ffffff"),Math.PI/2048);
  
  
  for(var i=0;i<dimen;i+=1){
    for(var j=0;j<dimen;j+=1){
      culture[i][j].draw(time);
      culture[i][j].mingle();
    }
  } 
  
  time+=1;
  
  setTimeout(render, 1000/60);
}

render();