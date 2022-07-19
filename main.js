x = 0;
y = 0;
var apple;
draw_apple = "";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload(){
  apple=loadImage("Apple.png");
}
function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak"; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content; 
     to_num=Number(content);
      if(Number.isInteger(to_num))
      {
        document.getElementById("status").innerHTML = "Started drawing Apples "; 
        draw_apple = "set";
      }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i<= to_num; i++){
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 600);
      image(apple, x, y, 50, 50);
      console.log("it works");
    }
    document.getElementById("status").innerHTML =to_num + "Apples are drawn. ";
    draw_apple = "";
  }

}








