Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

Webcam.attach("#webcam_display");

function takePic(){
    Webcam.snap(function(CapturedImg){
        document.getElementById("webcam_output").innerHTML='<img id="pic" src="' + CapturedImg + '">';
    });
}

console.log("ml5 version is", ml5.version);

model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wvtaJ-goE/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded Successfully");
}

function verifyPic(){
    img = document.getElementById("pic");
    model.classify(img, GetResult);
}

function GetResult(error, Array){
    if (error){
        console.error(error);
    }
    else{
        console.log(Array);
        document.getElementById("objectNam").innerHTML = Array[0].label;
        document.getElementById("objectAccuracy").innerHTML = Array[0].confidence.toFixed(3);
    }
}