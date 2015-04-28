/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var state = new Kiwi.State('Play');


var dialogotexto = [
    "" + nombre + " es un joven que vive en una provincia alejada de las grandes ciudades...",
    "siendo el mejor de la escuela, se gano una beca para estudiar en la capital.",
    "Pero lo que el no sabe, es que el reto lo va a tener es en la universidad de la vida...",
    ""
];
var movimiento = 0.3;
var contadorTexto = 0;
var fondo = 3;
var cambio = false;
state.preload = function () {

    Kiwi.State.prototype.preload.call(this);
    /*
     * Vamos a cargar todos los fondos que vallamos a usar para ir pasandolos a medida que inicie la narracion
     */
    //cargamos el fondo
    this.addImage('fondo1', './images/juego/cap1/cuidad-origen-1.jpg');
    this.addImage('fondo2', './images/juego/cap1/cuidad-origen-2.jpg');
    this.addImage('fondo3', './images/juego/cap1/cuidad-origen-3.jpg');
};

state.create = function () {

//variables
    //this.contador = 0;
    //objetos
    this.fondo1 = new Kiwi.GameObjects.Sprite(this, this.textures.fondo1, -810, 0);
    this.fondo2 = new Kiwi.GameObjects.Sprite(this, this.textures.fondo2, -800, 0);
    this.fondo3 = new Kiwi.GameObjects.Sprite(this, this.textures.fondo3, -560, 0);

    //( name  clock  delay  [repeatCount=0] )
    this.timer = this.game.time.clock.createTimer('time', 7, dialogotexto.length - 1, false);
    this.timerFondo = this.game.time.clock.createTimer('tiempoFondo', 10, 10, false);
    this.dialogo = new Kiwi.GameObjects.Textfield(this, "...", 50, 50, "#000", 17, 'normal', 'Impact');
    ;
    //timer
    this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_START, this.onTimerStart, this);
    this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT, this.onTimerCount, this);
    this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP, this.onTimerStop, this);
    //fondo
    this.timerFondo.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_START, this.onTimerStartFondo, this);
    this.timerFondo.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT, this.onTimerCountFondo, this);
    this.timerFondo.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP, this.onTimerStopFondo, this);
    //dielogo
    this.dialogo.x = 100;
    this.dialogo.y = 500;


    //texto del escenario
    this.textField = new Kiwi.GameObjects.Textfield(this, 'Escena 1');
    this.textField.x = this.game.stage.width / 2;
    this.textField.y = 10;
    this.textField.color = '#FFF';
    this.textField.fontFamily = 'Roboto, sans-serif';
    this.textField.textAlign = Kiwi.GameObjects.Textfield.TEXT_ALIGN_CENTER;
    //contador
    this.counter = 0;
    this.game.input.mouse.onDown.add(this.startTimer, this);
    this.game.input.mouse.onDown.add(this.startTimerFondo, this);
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

    this.addChild(this.fondo1);
    this.fondo1.visible = false;
    this.addChild(this.fondo2);
    this.fondo2.visible = false;
    this.addChild(this.fondo3);
    this.fondo3.visible = false;
    this.addChild(this.textField);
    //agregando al rectangulo con el dialogo
    this.addChild(this.rectangleStroke);
    this.addChild(this.dialogo);


};


state.update = function () {
    Kiwi.State.prototype.update.call(this);
    //this.dialogo.text = "tiempo es: " + this.game.time.now();
    /*
     * hacemos que los fondos comiencen a moverce
     */

    if (fondo === 1) {
        console.log("Entro en el fondo 1");
        fondoDel(this.fondo3, this.fondo1);
    } else if (fondo === 2) {
        console.log("Entro en el fondo 2");
        //this.fondo2.exists = true;
        fondoDel(this.fondo1, this.fondo2);
    } else if (fondo === 3) {
        console.log("Entro en el fondo 3");
        //this.fondo3.exists = true;
        fondoDel(this.fondo2, this.fondo3);
    }

    //cambiar de estado
    if (cambio) {
        //Kiwi.State.prototype.create.call(this);
        //this.game.states.switchState("Play2");
    }
};

function fondoDel(fondoAnterior, fondoahora) {
    fondoahora.visible = true;
    fondoAnterior.visible = false;
    fondoahora.x += movimiento;

    if (fondoahora.x > (this.game.stage.width - 810)) {
        fondoahora.x = -fondoahora.width + 810;
    }
}


state.startTimer = function () {

    this.timer.start();
};
state.startTimerFondo = function () {

    this.timerFondo.start();
};

state.clicked = function () {
    this.onTimerCount();
};

state.onTimerStart = function () {
    this.dialogo.text = dialogotexto[contadorTexto];
    //this.textField.text = "After 5 counts the Timer will stop.";
    console.log(dialogotexto[contadorTexto]);
};
state.onTimerStartFondo = function () {
//    this.dialogo.text = dialogotexto[contadorTexto];
    //this.textField.text = "After 5 counts the Timer will stop.";
//    console.log(dialogotexto[contadorTexto]);
};

state.onTimerCount = function () {
    //this.contador += 1;
    contadorTexto += 1;
    console.log(dialogotexto[contadorTexto]);
    this.dialogo.text = dialogotexto[contadorTexto];
//    if (fondo === 3) {
//        fondo = 1;
//    } else {
//        fondo += 1;
//    }
//    console.log(fondo);

    //this.textField.text = "Timer has counted " + this.contador + " times(s).";
};
state.onTimerCountFondo = function () {
    //this.contador += 1;
//    contadorTexto += 1;
//    console.log(dialogotexto[contadorTexto]);
//    this.dialogo.text = dialogotexto[contadorTexto];
    if (fondo === 3) {
        fondo = 1;
    } else {
        fondo += 1;
    }
    console.log(fondo);

    //this.textField.text = "Timer has counted " + this.contador + " times(s).";
};

state.onTimerStop = function () {
    contadorTexto = 0;
    this.dialogo.text = "";
    //this.textField.text = "Click to start the timer.";

};


state.clicked = function () {

    console.log("Hola");
    cambio = true;
    console.log(cambio);

};


var gameOptions = {
    renderer: Kiwi.RENDERER_WEBGL,
    width: "100%",
    height: "100%"
};

//var game = new Kiwi.Game('game-container', 'LoadingAnImage', state, gameOptions);
var game = new Kiwi.Game();
game.states.addState(state);
game.states.addState(state2);
game.states.switchState("Play");