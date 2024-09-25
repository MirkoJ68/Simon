let secuencia = [];
let secuenciaJugador = [];  
let verde;
let rojo;
let azul;
let rosa;
let aux = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  secuenciaC()
  verde = createSprite(300, 300,
    150, 150);
  verde.shapeColor = color(0,150,0);
  verde.onMousePressed = function() {
    this.shapeColor = color(0,255,0);
    secuenciaJugador.push(1);
  }
  verde.onMouseReleased = function() {
    this.shapeColor = color(0,150,0);
  }

  rojo = createSprite(480, 300,
    150, 150);
  rojo.shapeColor = color(150,0,0);
  rojo.onMousePressed = function() {
    this.shapeColor = color(255,0,0);
    secuenciaJugador.push(2);
  }
  rojo.onMouseReleased = function() {
    this.shapeColor = color(150,0,0);
  }

  azul = createSprite(300, 480,
    150, 150);
  azul.shapeColor = color(0,0,150);
  azul.onMousePressed = function() {
    this.shapeColor = color(0,0,255);
    secuenciaJugador.push(3);
  }
  azul.onMouseReleased = function() {
    this.shapeColor = color(0,0,150);
  }

  rosa = createSprite(480, 480,
    150, 150);
  rosa.shapeColor = color(205,142,190);
  rosa.onMousePressed = function() {
    this.shapeColor = color(255,192,213);
    secuenciaJugador.push(4);
  }
  rosa.onMouseReleased = function() {
    this.shapeColor = color(205,142,190);
  } 
   
  

}

function secuenciaC(){
  setTimeout((v) => {
     (v = Math.floor(random(1,5))); secuencia.push(v);
    aux = v},1000)
    
  }

function draw() {
  background(50);
  drawSprites();
    console.log(secuencia)
    if(aux === 1){
      Verde()
    }
    if(aux === 2){
      Rojo()
    }
    if(aux === 3){
      Azul()
    }
    if(aux === 4){
      Rosa()
    }
  
}
  function Verde(){
    verde.shapeColor = color(0,255,0);
    setTimeout(() => {
      verde.shapeColor = color(0,150,0);secuenciaC()},1000)
  }
  function Rojo(){
    rojo.shapeColor = color(255,0,0);
    setTimeout(() => {
      rojo.shapeColor = color(150,0,0);secuenciaC()},1000)
  }
  function Azul(){
    azul.shapeColor = color(0,0,255);
    setTimeout(() => {
      azul.shapeColor = color(0,0,150);secuenciaC()},1000)
  }
  function Rosa(){
    rosa.shapeColor = color(255,192,213);
    setTimeout(() => {
      rosa.shapeColor = color(205,142,190);secuenciaC()},1000)
  }
  function Comparar(){
    if (secuencia === secuenciaJugador){
      secuenciaC()
    }
    if (secuencia !== secuenciaJugador){
      return
    }
  }

