class Game {
    constructor(){}
  
    getState(){
      var GameStateRef  = database.ref('GameState');
      GameStateRef.on("value",function(data){
         GameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        GameState: state
      });
    }
  
    async start(){
      if(GameState === 0){
        player = new Player();
        var PlayerCountRef = await database.ref('PlayerCount').once("value");
        if(PlayerCountRef.exists()){
          PlayerCount = PlayerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        var display_position = 130;
        for(var plr in allPlayers){
          if (plr === "Player" + player.index)
            fill("red")
          else
            fill("black");
            console.log(plr);
            console.log(allPlayers[plr].name)
            console.log(allPlayers[plr].distance)
          display_position+=20;
          textSize(15);
          text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
    }
  }
































