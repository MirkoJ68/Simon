let secuencia = [];
let secuenciaJugador = [];  
let verde;
let rojo;
let azul;
let rosa;
let aux = 0;
let turnoJugador = false;
let paso = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  verde = createSprite(300, 300,
    150, 150);
  verde.shapeColor = color(0,150,0);
  verde.onMousePressed = function() {
    if (turnoJugador) {
      this.shapeColor = color(0, 255, 0);
      secuenciaJugador.push(1);
      verificarSecuencia();
    }
  }
  verde.onMouseReleased = function() {
    this.shapeColor = color(0,150,0);
  }

  rojo = createSprite(480, 300,
    150, 150);
  rojo.shapeColor = color(150,0,0);
  rojo.onMousePressed = function() {
    if (turnoJugador) {
      this.shapeColor = color(255, 0, 0);
      secuenciaJugador.push(2);
      verificarSecuencia();
    }
  }
  rojo.onMouseReleased = function() {
    this.shapeColor = color(150,0,0);
  }

  azul = createSprite(300, 480,
    150, 150);
  azul.shapeColor = color(0,0,150);
  azul.onMousePressed = function() {
    if (turnoJugador) {
      this.shapeColor = color(0, 0, 255);
      secuenciaJugador.push(3);
      verificarSecuencia();
    }
  }
  azul.onMouseReleased = function() {
    this.shapeColor = color(0,0,150);
  }

  rosa = createSprite(480, 480,
    150, 150);
  rosa.shapeColor = color(205,142,190);
  rosa.onMousePressed = function() {
    if (turnoJugador) {
      this.shapeColor = color(255, 192, 213);
      secuenciaJugador.push(4);
      verificarSecuencia();
    }
  }
  rosa.onMouseReleased = function() {
    this.shapeColor = color(205,142,190);
  } 
   
  secuenciaC();

}

function secuenciaC(){
  turnoJugador = false;
  secuenciaJugador = [];
  paso++;
  
  let nuevocolor = Math.floor(random(1, 5));
  secuencia.push(nuevocolor);
  
  mostrarSecuencia();
  }

  function mostrarSecuencia() {
    let i = 0;
    let intervalo = setInterval(() => {
      aux = secuencia[i];
      encenderwindow(aux);
      i++;
  
      if (i >= secuencia.length) {
        clearInterval(intervalo);
        turnoJugador = true; 
      }
    }, 1000);
  }

  function encenderwindow(v) {
    if (v === 1) {
      verde.shapeColor = color(0, 255, 0);
      setTimeout(() => verde.shapeColor = color(0, 150, 0), 500);
    } else if (v === 2) {
      rojo.shapeColor = color(255, 0, 0);
      setTimeout(() => rojo.shapeColor = color(150, 0, 0), 500);
    } else if (v === 3) {
      azul.shapeColor = color(0, 0, 255);
      setTimeout(() => azul.shapeColor = color(0, 0, 150), 500);
    } else if (v === 4) {
      rosa.shapeColor = color(255, 192, 213);
      setTimeout(() => rosa.shapeColor = color(205, 142, 190), 500);
    }
  }

  function verificarSecuencia() {
    let v = secuenciaJugador.length - 1;
    
    if (secuenciaJugador[v] !== secuencia[v]) {
      alert("perdiste");
      reiniciarJuego();
    } else if (secuenciaJugador.length === secuencia.length) {
      setTimeout(() => secuenciaC(), 1000);
    }
  }
  
  function reiniciarJuego() {
    secuencia = [];
    secuenciaJugador = [];
    paso = 0;
    secuenciaC();
  }

function draw() {
  background(50);
  drawSprites();
    console.log(secuenciaJugador)
   
}

