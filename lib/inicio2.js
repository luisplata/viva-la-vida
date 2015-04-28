/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var cambio = false;
var state2 = new Kiwi.State('Play2');

var dialogotexto = [
    "Hola " + nombre + ", como estas...",
    "Me da gusto conocerte...",
    "Perdona pero me tengo que ir :(",
    ""
];
var contadorTexto = 0;
state2.preload = function () {

    Kiwi.State.prototype.preload.call(this);

    //cargamos el fondo
    this.addImage('space', './assets/fondo/fondo1.jpg');
    //cargamos la hero
    this.addImage("hero", "assets/personaje/hero1.png");



};

state2.create = function () {

//variables
    //this.contador = 0;
    //objetos
    this.fondo = new Kiwi.GameObjects.StaticImage(this, this.textures.space);
    this.hero = new Kiwi.GameObjects.Sprite(this, this.textures.hero, 300, 135);
    //( name  clock  delay  [repeatCount=0] )
    this.timer = this.game.time.clock.createTimer('time', 5, dialogotexto.length - 1, false);
    this.dialogo = new Kiwi.GameObjects.Textfield(this, "...");
    //timer
    this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_START, this.onTimerStart, this);
    this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT, this.onTimerCount, this);
    this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP, this.onTimerStop, this);
    //dielogo
    this.dialogo.x = 100;
    this.dialogo.y = 500;
    this.dialogo.fontFamily = "Roboto, sans-serif";
    this.dialogo.color = '#000';
    this.dialogo.anchorPointX = 10;



    //texto del escenario
    this.textField = new Kiwi.GameObjects.Textfield(this, 'Escena 1');
    this.textField.x = this.game.stage.width / 2;
    this.textField.y = 10;
    this.textField.color = '#000';
    this.textField.fontFamily = 'Roboto, sans-serif';
    this.textField.textAlign = Kiwi.GameObjects.Textfield.TEXT_ALIGN_CENTER;
    //contador
    this.counter = 0;
    this.game.input.mouse.onDown.add(this.startTimer, this);
    //el clik para pasar el dialogo
    this.game.input.mouse.onUp.add(this.clicked, this);

//recrtangulo
// Demo rectangles
    params = {
        state: this,
        width: 600,
        height: 60,
        x: 95,
        y: 490,
        color: [1.0, 0.4, 0.1]
    };
    this.rectangleStroke = new Kiwi.Plugins.Primitives.Rectangle(params);

    //agregando al canvas
    this.addChild(this.fondo);
    this.addChild(this.textField);
    this.addChild(this.hero);
    //agregando al rectangulo con el dialogo
    this.addChild(this.rectangleStroke);
    this.addChild(this.dialogo);


};

state2.startTimer = function () {

    this.timer.start();
};

state2.clicked = function () {
    this.onTimerCount();
};

state2.onTimerStart = function () {
    this.dialogo.text = dialogotexto[contadorTexto];
    //this.textField.text = "After 5 counts the Timer will stop.";
    console.log(dialogotexto[contadorTexto]);
};

state2.onTimerCount = function () {
    //this.contador += 1;
    contadorTexto += 1;
    console.log(dialogotexto[contadorTexto]);
    this.dialogo.text = dialogotexto[contadorTexto];
    //this.textField.text = "Timer has counted " + this.contador + " times(s).";
};

state2.onTimerStop = function () {
    contadorTexto = 0;
    this.dialogo.text = "";
    //this.textField.text = "Click to start the timer.";

};

state2.update = function () {
    Kiwi.State.prototype.update.call(this);
    //this.dialogo.text = "tiempo es: " + this.game.time.now();
    if (cambio) {
        Kiwi.State.prototype.create.call(this);
        this.game.states.switchState("Play");
    }
};

state2.clicked = function () {


    cambio = true;

};


