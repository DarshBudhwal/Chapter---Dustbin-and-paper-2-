class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image= addImage("paper.png");
		World.add(world, this.image);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push();
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER);
			strokeWeight(3);
			fill(255,0,255);
			ellipse(0,0,this.r, this.r);
			pop();
			
	}

}