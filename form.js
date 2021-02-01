class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.greet=createElement("h2");
      
      
     
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.greet.hide();
      }
      display(){
        this.title.html(" Dunk Shot");
        this.title.position(500, 0);
    
        this.input.position(500, 370);
        this.button.position(500, 450);
 
    
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          start.visible=true;
          this.greeting.html("Hello " + player.name)
          this.greeting.position(500, 300);
          this.greet.html("INSTRUCTIONS:   Drag the ball to move it in the hope")
          this.greet.position(400,380);
        });
}
}