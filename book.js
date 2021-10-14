function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

img= "";
status = "";

function preload()
{
   img = loadImage("https://tse4.mm.bing.net/th?id=OIP.tbAL6CrYjYw_fHsy2Z3NtAHaEo&pid=Api&P=0&w=273&h=172");
}

function modelLoaded()
{
    console.log("Model Loaded");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
      for (var i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status : Object Detected";
  
        fill(255, 0, 0);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(255, 0, 0);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
function back()
{
    window.location = "index.html";
}