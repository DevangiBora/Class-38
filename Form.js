class Form {

        constructor() {
          this.input = createInput("Name");
          this.button = createButton('Play');
          this.greeting = createElement('h3');
        }

hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();

}        

display(){
    var title = createElement('h2');
    title.html("Winter Moon");
    title.position(130,0);

    this.input.position(130,160);
    this.button.position(250,200);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

      player.name = this.input.value();
      
     PlayerCount+=1;
     player.index = PlayerCount;
     player.update();
     player.updateCount(PlayerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
}


    










