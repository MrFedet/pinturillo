//Guardar el elemento y el contexto
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;

let lapiz_tamanio;
let color;
function getInfo(){
  if (document.getElementById("id1").checked == true){
    lapiz_tamanio = 10;
  } else if (document.getElementById("id2").checked == true){
    lapiz_tamanio = 20;
  } else if (document.getElementById("id3").checked == true){
    lapiz_tamanio = 35;
  } else if (document.getElementById("id4").checked == true){
    lapiz_tamanio = 50;
  } else if (document.getElementById("id5").checked == true){
    lapiz_tamanio = 65;
  }

  if (document.getElementById("id6").checked == true){
    color= "#000"
  }else if (document.getElementById("id7").checked == true){
    color = "#FB0000"
  } else if (document.getElementById("id8").checked == true){
    color ="#FCF502"
  }else if (document.getElementById("id9").checked == true){
    color ="#F700FB"
  }else if (document.getElementById("id10").checked == true){
    color ="#7200FB"
  }else if (document.getElementById("id11").checked == true){
    color ="#2E00FB"
  }else if (document.getElementById("id12").checked == true){
    color ="#002AFB"
  }else if (document.getElementById("id13").checked == true){
    color ="#00D5FB"
  }else if (document.getElementById("id14").checked == true){
    color ="#00FB76"
  }else if (document.getElementById("id15").checked == true){
    color ="#FB7E00"
  }

  if (document.getElementById("id16").checked == true){
    color = "#fff";
    lapiz_tamanio = 35;
  }
}

const dibujar = (cursorX, cursorY) => {
  getInfo()
  context.beginPath();
  context.moveTo(initialX, initialY);
  context.lineWidth = lapiz_tamanio;
  context.strokeStyle = color;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(cursorX, cursorY);
  context.stroke();

  initialX = cursorX;
  initialY = cursorY;
};

const mouseDown = (evt) => {
  initialX = evt.offsetX;
  initialY = evt.offsetY;
  dibujar(initialX, initialY);
  mainCanvas.addEventListener("mousemove", mouseMoving);
};

const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY);
};

const mouseUp = () => {
  mainCanvas.removeEventListener("mousemove", mouseMoving);
};

mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);