webcam.set({
    width:350,
    hieght:300,
    image_format:'png',
    png_qulity:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
});
}


console.log('ml5 version', ml5.version);

classifier= ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/v_sl958zE/model.json',modeLoaded );

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1="The first predition is"+ predition_1;
    speak_data_2="And the second predition is"+ predition_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}