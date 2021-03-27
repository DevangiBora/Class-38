var ball;
var database;
var position;
var GameState = 0;
var player, form, game
var PlayerCount=0;
var allPlayers;


function setup(){
    createCanvas(500,500); 
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(PlayerCount===4){
        game.update(1);
    }

    if(GameState===1){
        clear();
        game.play();
    }
   
}




















