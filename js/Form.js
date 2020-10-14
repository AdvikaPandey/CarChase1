class Form {
    constructor(){}
display(){
    var title = createElement('h2');
    title.html("The Car Chase");
    title.position(250,50);

    var input = createInput('Your Name:');
    input.position(250,200);

    var button = createButton('SUBMIT');
    button.position(280,250);

    var greeting = createElement('h3');

    button.mousePressed(function(){
        input.hide();
        button.hide();
    var Name = input.value();
    playerCount++;
    player.update(Name);
    player.updateCount(playerCount);

    greeting.html("Hello" + Name);
    greeting.position(240,250);
    });
}
    }
