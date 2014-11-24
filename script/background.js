var fillCanvasBox = new rect(0,0,canvas.height,canvas.width,"#000000");

var model = new eColi([[50,100], [50,200]],  [[50,50], [50,150], [50,250]] );

var time = 0;

function render(){
  
  
  model.draw(time);  
  fillCanvasBox.draw();
  
  time+=1;
  setTimeout(render, 1000/60);
}

render();