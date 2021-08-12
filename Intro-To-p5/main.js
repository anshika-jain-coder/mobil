function preload(){

}

function setup(){
    canvas=createCanvas(650,490);
    canvas.position(100,250);
    video=createCapture(VIDEO);
    video.hide();
tint_color="";
}

function draw(){
    image(video,0,0,650,490);
    tint(tint_color);
}
function take_snapshot(){
    save('Your filtered image.png');
}
function apply_filter(){
    tint_color=document.getElementById("tint").value;
}