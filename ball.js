class Ball
{
    constructor(a,b,c)
    {
var ball_options = {
    isStatic :  false,
    restitution : 0.85
    
}
this.x = a;
this.y = b;
this.r = c;

this.body = Bodies.circle(a,b,c,ball_options);
World.add(world,this.body);
    }
    display()
    {
var ball_position = this.body.position;
push ();


translate(ball_position.x,ball_position.y);
ellipseMode(RADIUS);
fill ("white")
ellipse(0,0,this.r,this.r);

pop ();
    }
    
}