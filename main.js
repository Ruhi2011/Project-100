var SpeechRecognition = window.webkitSpeechRecognition;
var content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
if (content == "selfie"){
    speak();
}
}



camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
setTimeout(function (){
    imageid = "selfie1";
    takesnapshot();
    speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},5000);
setTimeout(function (){
    imageid = "selfie2";
    takesnapshot();
    speak_data = "Taking your next selfie in 15 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},10000);
setTimeout(function (){
    imageid = "selfie3";
    takesnapshot();
    },15000);
}
function takesnapshot() {
    Webcam.snap(function(data_uri){
        if (imageid == "selfie1"){
            document.getElementById("result1").innerHTML = '<img src = "'+data_uri +'"/>';
        }
        if (imageid == "selfie2"){
            document.getElementById("result2").innerHTML = '<img src = "'+data_uri +'"/>';
        }
        if (imageid == "selfie3"){
            document.getElementById("result3").innerHTML = '<img src = "'+data_uri +'"/>';
        }
    });
}


