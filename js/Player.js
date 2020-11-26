class Player {
  constructor(){
    this.index = null;
    this.name = null;
    this.Game = null;
    this.Username = null;
    this.Timezone = null;
    this.TimeAvailable = null;
    this.Communication = null;
    
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      Game:this.Game,
      Username: this.Username,
      Timezone: this.Timezone,
      TimeAvailable: this.TimeAvailable,
      Commuinication: this.Communication

    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  
}
