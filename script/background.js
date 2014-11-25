var fillCanvasBox = new rect(new vector(0,0), new vector(canvas.height,canvas.width),"#000000");

var model = new eColi(
  [ new point(50,20,"#ffffff"), new point(50,40,"#ffffff") ] ,  
  [ new point(50,10,"#ffffff"), new point(50,30,"#ffffff"), new point(50,50,"#ffffff") ] 
);

var time = 0;

var r = new point(100,100,"#ffff00");
fillCanvasBox.draw();
function render(){
  
  fillCanvasBox.draw();
  
  
  model.draw(time);
  r.draw();
  time+=1;
  
  setTimeout(render, 1000/60);
}

render();