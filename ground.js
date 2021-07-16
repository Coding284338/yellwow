//creating a class and create 2 functions, named as constructer, and display.
class Ground


{

// putting the natural and physical properties inside the constructer

constructor(a,b,c,d)// put the unkown values of the natural properties
{

// adding physical properties are isStatic,restitution(bounciness),friction,density
var ground_options = {
isStatic : true
}

// adding natural properties are x,y,width,height,radius(if circle)
this.x = a;
this.y = b;
this.width = c;
this.height = d;

// creating an object, and objects are called body
this.body = Bodies.rectangle(a,b,c,d,ground_options);
// adding the object inside the world
World.add(world,this.body);

}

display()
{
// creating a variable to store the position of the ground
var ground_position = this.body.position;
push ();
// taking the values of X and Y from the player
translate(ground_position.x,ground_position.y);
// bringing the objects by default in center
rectMode(CENTER);
fill("yellow");
// Maintaning the order of the natural properties while creating the object in the sketch.js file.
rect(0,0,this.width,this.height);




pop()
}
}




