class Block{
    constructor(x,y,width,height){
        var options={
            restitution:0.4,
            friction:0.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.image=loadImage("pink.png");
        this.visiblity=255;
    }
    display(){
        if(this.body.speed<6){
            var pos=this.body.position;
            var angle=this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image (this.image,0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body)
            push();
            this.visiblity=this.visiblity-5;
            tint(250,this.visiblity)
            image(this.image,this.body.position.x,this.body.position.x,this.width,this.height);
            pop();
        }

    }
}