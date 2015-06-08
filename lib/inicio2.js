/* 
 * recuerdo del lugar donde vivia, y hablara con una chica. y ella le preguntara si se quiere ir y para donde.
 * 3opciones
 * - cartagena
 *  * es una ciudad caliente y que tenga cuidado con el sol
 * - bogota
 *  * es una ciudad fria y que tenga cudado con la gripa
 * - medellin 
 *  * es una ciudad con clima perfecto, pero que tenga cuidado con los carros
 */


var cambio = false;
var state2 = new Kiwi.State('Play2');
var dialogoGlobal = 0;


var arrayDeArrayAsosiativo = new Array();

var dialogo1 = {
    "nombre": "Beatriz",
    "dialogo": [
        "Hola " + nombre + ", como estas...",
        "Me da gusto conocerte...",
        "yo soy Beatriz y vivo al lado tuyo",
        "Quiero conocerte mas..."

    ]
};
var dialogo2 = {
    "nombre": nombre,
    "dialogo": [
        "Si?... no me habia dado cuenta... :P",
        "perdona si no te salude antes andaba un poco ocupado estudiando",
        "Pero cuenta con migo para cualquier cosa que necesites"
    ]
};
var dialogo3 = {
    "nombre": "Beatriz",
    "dialogo": [
        "Sii??!! :D",
        "Gracias es bueno saber que cuento con tigo..."
    ]
};
var dialogo4 = {
    "nombre": nombre,
    "dialogo": [
        "Aunque no creo que te pueda ayudar por mucho tiempo",
        "Ya que me voy a la universidad"
    ]
};
var dialogo5 = {
    "nombre": "Beatriz",
    "dialogo": [
        "Enserio??!!  :'(",
        "Tenemos cerca muchas...",
        "a que universidad vas a ir?",
        ""
    ]
};

arrayDeArrayAsosiativo.push(dialogo1);
arrayDeArrayAsosiativo.push(dialogo2);
arrayDeArrayAsosiativo.push(dialogo3);
arrayDeArrayAsosiativo.push(dialogo4);
arrayDeArrayAsosiativo.push(dialogo5);
//variable para controlar el dialogoactual
var dialogoActual = 1;

var dialogotextoEscena2 = [
    "Hola " + nombre + ", como estas...",
    "Me da gusto conocerte...",
    "yo soy Beatriz y vivo al lado tuyo",
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
    //( name  delay  clock [repeatCount=0] )
    this.timer = this.game.time.clock.createTimer('time', 5, 100, false);
    //textFiled
    this.dialogo = new Kiwi.GameObjects.Textfield(this, "Click para empesar");
    this.personaje = new Kiwi.GameObjects.Textfield(this, "");
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
    this.dialogo.fontSize = 20;
    //personaje textfiled
    this.personaje.x = 100;
    this.personaje.y = 455;
    this.personaje.fontFamily = "Roboto, sans-serif";
    this.personaje.color = '#000';
    this.personaje.anchorPointX = 10;
    this.personaje.fontSize = 30;



    //texto del escenario
    this.textField = new Kiwi.GameObjects.Textfield(this, 'Escena 2');
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
    this.addChild(this.personaje);


};

state2.startTimer = function () {

    this.timer.start();

};

state2.clicked = function () {
    this.onTimerCount();
};

dialogoActual = 0;
state2.onTimerStart = function () {
    console.log(arrayDeArrayAsosiativo[dialogoGlobal]);
    this.dialogo.text = arrayDeArrayAsosiativo[dialogoGlobal].dialogo[dialogoActual];
    this.personaje.text = arrayDeArrayAsosiativo[dialogoGlobal].nombre;
    //this.textField.text = "After 5 counts the Timer will stop.";
    //console.log(dialogotextoEscena2[contadorTexto]);
    //console.log(arrayDeArrayAsosiativo[dialogoGlobal].dialogo[dialogoActual]);
    //console.log(arrayDeArrayAsosiativo[dialogoGlobal].dialogo.length);
};

state2.onTimerCount = function () {
    //this.contador += 1;
    contadorTexto += 1;
    //dialogoGlobal += 1;

    //console.log(dialogotextoEscena2[contadorTexto]);
    this.dialogo.text = arrayDeArrayAsosiativo[dialogoGlobal].dialogo[dialogoActual];
    console.log(arrayDeArrayAsosiativo[dialogoGlobal].dialogo[dialogoActual]);
    this.personaje.text = arrayDeArrayAsosiativo[dialogoGlobal].nombre;
    //this.textField.text = "Timer has counted " + this.contador + " times(s).";
    dialogoActual += 1;
};

state2.onTimerStop = function () {
    contadorTexto = 0;
    this.dialogo.text = "";
    //this.textField.text = "Click to start the timer.";

};

state2.cambio = function () {
    if (cambio) {
        Kiwi.State.prototype.create.call(this);
        this.game.states.switchState("Play");
    }
};

state2.update = function () {
    Kiwi.State.prototype.update.call(this);
    //this.dialogo.text = "tiempo es: " + this.game.time.now();

    //cambio de dialogo, y de 
    /*
     * for(){
     *  for(){
     *          aunmenta el dialogo actual
     *      }
     *      aumenta el dialogo global
     *  }
     */



    if (arrayDeArrayAsosiativo.length - 1 === dialogoGlobal && arrayDeArrayAsosiativo[(dialogoGlobal)].dialogo.length === dialogoActual) {
        console.log("Se acabaron los dialogos");
        dialogoActual = 1;
        dialogoGlobal = 0;
        this.timer.stop();
    }
    else if (arrayDeArrayAsosiativo[dialogoGlobal].dialogo.length === dialogoActual) {
        console.log("Se acabo");

        dialogoGlobal += 1;
        dialogoActual = 0;
        console.log(arrayDeArrayAsosiativo[dialogoGlobal]);
    }

    //console.log((arrayDeArrayAsosiativo.length - 1) + "===" + dialogoGlobal + "==="
    //      + (arrayDeArrayAsosiativo[dialogoGlobal].dialogo.length) + "===" + dialogoActual);
};

state2.clicked = function () {


//    cambio = true;

};


