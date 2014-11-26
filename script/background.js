var fillCanvasBox = new rect(new vector(0,0), new vector(canvas.height,canvas.width),"#000000");

var model = new eColi(
  [ new point(50,20,"#ffffff"), new point(50,40,"#ffffff") ] ,  
  [ new point(50,10,"#ffffff"), new point(50,30,"#ffffff"), new point(50,50,"#ffffff") ] 
);

var time = 0;


fillCanvasBox.draw();
function render(){
  
  fillCanvasBox.draw();
  
  ctx.font="10px Georgia";
  ctx.fillStyle="#ff00ff";
  ctx.fillText("<- this is the draft model for a bacteria!",80,40);
  
  model.draw(time);
  
  time+=1;
  
  setTimeout(render, 1000/60);
}

render();