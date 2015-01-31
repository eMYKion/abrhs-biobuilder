var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.height  = canvas.width;

ctx.strokeStyle = "#000000";
ctx.arc(50,50,5,0,2*Math.PI, true);
ctx.stroke();