var fillCanvasBox = new rect(0,0,canvas.height,canvas.width,"#000000");

function render(){

  fillCanvasBox.draw();
  setTimeout(render, 1000/60)
}
render();