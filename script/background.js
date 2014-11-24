var fillCanvasBox = new rect(0,0,canvas.height,canvas.width,"#000000");

var model = new eColi( [ new point(50,100), new point(50,200) ] ,  [ new point(50,50), new point(50,150), new point(50,250) ] );

var time = 0;

var r = new point(50,50);

function render(){
  
  
  model.draw(time);
  r.draw();
  fillCanvasBox.draw();
  
  time+=1;
  setTimeout(render, 1000/60);
}

render();