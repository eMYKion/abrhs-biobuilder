//house keeping stuff
var Banner = document.getElementById("Banner");
function resize(){
    var BannerWidth = document.getElementById("top").clientWidth;
    Banner.width = BannerWidth-100;
    Banner.height = BannerWidth/1277*274;
    
    
    
    var bread = document.getElementById("bread");
    
    bread.width = bread.width/5;
    bread.height = bread.height/5;
    
    
}

//and now the fun begins!

//var canvas = document.getElementById("canvas");
//var ctx = canvas.getContext("2d");

//canvas.height  = canvas.width;
/*
ctx.strokeStyle = "#000000";
ctx.arc(50,50,5,0,2*Math.PI, true);
ctx.stroke();
*/
function render(){
    resize();
    
    
    
    
    
}
setInterval(render, 1000/60);



