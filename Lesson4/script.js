// function main() {
//     var socket = io();
    // var chatDiv = document.getElementById('chat');
    // var input = document.getElementById('message');
    // var button = document.getElementById('submit');
 
//     function handleSubmit(evt) {
//         var val = input.value;
//         if (val != "") {
//             socket.emit("send message", val);
//         }
//     }
//     button.onclick = handleSubmit;
//     function handleMessage(msg) {
//         var p = document.createElement('p');
//         p.innerText = msg;
//         chatDiv.appendChild(p);
//         input.value = "";
// }

// socket.on('display message', handleMessage);
// }

// window.onload = main; 

var socket = io();
function setup() {
    createCanvas(500,500);
    background('#acacac');
}
// var value = 0;
function draw() {
//   fill(value);
  let val = [mouseX, mouseY]
  socket.emit("send cordinates", val);  
  function handleMessage(msg){
            if(handleMessage){
                fill(0);
            }else{
                fill(255);
            }
            ellipse(msg[0], msg[1], 10, 10);
}
socket.on("display message", handleMessage);
}
// socket.on("display message", val);
// function mouseDragged() {
//     ellipse(mouseX, mouseY, 10, 10);
//     return false;
//   }