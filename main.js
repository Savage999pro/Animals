Background_noise=0;
Mooing=0;
Meowing=0;
Barking=0;
r=0
g=0
b=0
results_sound=""
img=""
//https://teachablemachine.withgoogle.com/models/N7bZ64Hjp/
function startClassification()
{  navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/N7bZ64Hjp/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
    console.log("Model is Ready")
}
img=document.getElementById("animal_image")
function gotResults(error, results) {
if(error){
    console.log(error)  
}
else{
console.log(results)
}
r=Math.random(0,255);
g=Math.random(0,255);
b=Math.random(0,255);
results_sound=results[0].label;
document.getElementById("result_label").innerHTML="I can hear " + results_sound;


if(results_sound=="Barking"){
    Barking=Barking + 1;
    img.src="doggy.gif"
    
}
else if(results_sound=="Meowing"){
    Meowing=Meowing + 1;
    img.src="cat.gif"
}
else if(results_sound=="Mooing"){
    Mooing=Mooing + 1;
    img.src="cow.gif"
}
else{
    img.src="https://shravaripatil.github.io/Sound_controlled_animals/listen.gif"
} 
}
