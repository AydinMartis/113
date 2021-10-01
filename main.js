function preload ()
{

}

function setup ()
{
   canvas= createCanvas(640,480);
   canvas.position(110,250);
   webcam=createCapture(VIDEO);
   webcam.hide();
   tint_color="";
   
}

function draw ()
{
    image(webcam,0,0,250,200);
    tint(tint_color);
    circle(20, 20, 50);
    circle(20, 200, 50);
    circle(230, 20, 50);
    circle(240, 195, 50);
    
}


function filter_tint()
{
   tint_color= document.getElementById("color").value;
}


function take_snapshot()
{
    save('my_selfie.png');
}