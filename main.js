function preload(){

}
function setup(){
    Canvas = createCanvas(500, 500);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide()

    PoseNet = ml5.poseNet(Video, modelLoaded)
    PoseNet.on("pose", gotPoses)
}
function draw(){
    image(Video, 0, 0, 500, 500);
}
function TakeSnap(){
    save("Image.png");
}

function modelLoaded(){
    console.log("Model initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}