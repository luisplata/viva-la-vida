/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



//var game = new Kiwi.Game('game-container', 'LoadingAnImage', state, gameOptions);
var game = new Kiwi.Game();
game.states.addState(state);
game.states.addState(state2);
game.states.switchState("Play");