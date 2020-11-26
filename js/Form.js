class Form {

  constructor() {
    this.inputName = createInput("Name");
    this.inputGame = createInput("Game You Play");
    this.inputUsername = createInput("Username In Game Played");
    this.inputTimezone = createInput("Timezone you live in");
    this.inputTimeAvailable = createInput("When Time Can You Tryout")
    this.inputCommunication = createInput("Some Way That We can contact you (Example - instagram)")
    this.button = createButton('Submit');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    
  }
  hide(){
    
  }

  display(){
    this.title.html("Alchemy Tryout Information");
    this.title.position(displayWidth/2 - 50, 150);

    this.inputName.position(displayWidth/2 - 40 , displayHeight/2 - 20);
    this.inputGame.position(displayWidth/2 - 40 , displayHeight/2 + 10);
    this.inputUsername.position(displayWidth/2 - 40 , displayHeight/2 + 40);
    this.inputTimezone.position(displayWidth/2 - 40 , displayHeight/2 + 70);
    this.inputTimeAvailable.position(displayWidth/2 - 40 , displayHeight/2 + 110);
    this.inputCommunication.position(displayWidth/2 - 40 , displayHeight/2 + 140);
    this.button.position(displayWidth/2 + 30, displayHeight/2 + 180);
   

    this.button.mousePressed(()=>{
      form.hide
      player.name = this.inputName.value();
      player.Game = this.inputGame.value();
      player.Username = this.inputUsername.value();
      player.Timezone = this.inputTimezone.value();
      player.TimeAvailable = this.inputTimeAvailable.value();
      player.Communication = this.inputCommunication.value();

      this.inputName.hide();
    this.inputGame.hide();
    this.inputUsername.hide();
    this.inputTimezone.hide();
    this.inputTimeAvailable.hide();
    this.inputCommunication.hide();
    this.button.hide();
      

      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Thank You For Applying to Team Alchemy. We will get back to you shortly")
      this.greeting.position(displayWidth/2, displayHeight/2);
    });

    

  }
}
