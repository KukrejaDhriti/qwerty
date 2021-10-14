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
    fill("#dc143c");
    text("book", 45, 75);
    noFill();
    stroke("#dc143c");
    rect(30, 60, 450, 350);
}
function back()
{
    window.location = "index.html";
}