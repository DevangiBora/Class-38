class Player {

        constructor(){
            this.index = null;
            this.name = null;
            this.distance = 0;

        }

getCount(){
    database.ref("PlayerCount").on("value",(data)=>{
        PlayerCount = data.val()
    })
}

updateCount(Count){
    database.ref("/").update({
        PlayerCount: Count
    })

}

update(){
    var PlayerIndex = "Players/Player"+this.index
    database.ref(PlayerIndex).set({
        name: this.name,
        distance: this.distance
    })
}

static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }






}

























