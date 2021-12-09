class DrawGradientCircle {
            

    constructor(ctx, canvasWidth, canvasHeight, direction)
    {
            this.c=  {
            x: 90,
            y: 90,
            r: 75
        };

        this.g = {
            x1: 45,
            y1: 70,
            r1: 10,

            x2: 90,
            y2: 90,
            r2: 80
        }

        this.el =  {
            x: 50,
            y: 60,
            radiusX: 5,
            radiusY: 12
        };

        this.ctx = ctx; 
        
        this.direction = direction; 
        this.canvasWidth = canvasWidth; 
        this.canvasHeight = canvasHeight; 

        this.cy = 0; 
    }


    /*
        direction: [
            0: left
            1: Top
            2: Right
            3: button
            4: Drop from top corner
        ] 
    */
    move(speed) 
    {

        
       

        if (this.c.x >= this.canvasWidth) 
        {
            // this.resetCoordinate();

            this.direction = 0; 
            console.log(`D: ${this.direction} =>c: [  x:${this.c.x}, y:${this.c.y}], g: [${this.g.x1}, ${this.g.y1}, ${this.g.x2}, ${this.g.y2}], el: [$${this.el.x}, ${this.el.y}]]`);

           
        };

        if (this.c.x <= 0) 
        {
            this.direction = 2; 
            console.log(`[D: ${this.direction} => c: ${this.c.x}, ${this.c.y}], g: [${this.g.x1}, ${this.g.y1}, ${this.g.x2}, ${this.g.y2}], el: [$${this.el.x}, ${this.el.y}]]`);

        }

        if (this.c.y >= this.canvasHeight)
        {
            this.direction = 1; 
            console.log(`[D: ${this.direction} => c: ${this.c.x}, ${this.c.y}], g: [${this.g.x1}, ${this.g.y1}, ${this.g.x2}, ${this.g.y2}], el: [$${this.el.x}, ${this.el.y}]]`);


        }

        if (this.c.y <= 0)
        {
            this.direction = 3; 
            console.log(`[D: ${this.direction} => c: ${this.c.x}, ${this.c.y}], g: [${this.g.x1}, ${this.g.y1}, ${this.g.x2}, ${this.g.y2}], el: [$${this.el.x}, ${this.el.y}]]`);

        }

        //// Resetting Parent to original with  its associates
       

      

        

        

        if (this.direction == 0)
        {
            this.c.x -= speed;
            this.c.y = this.c.y;

            //// Gradient 
            this.g.x1 -= speed;
            this.g.y1 = this.g.y1;
            this.g.x2 -= speed;
            this.g.y2 = this.g.y2;

            //// Ellipse 
            this.el.x -= speed;
            this.el.y = this.el.y;
        }
        else if (this.direction == 1)
        {
            this.c.x = this.c.x;
            this.c.y -= speed;
    
            //// Gradient 
            this.g.x1 = this.g.x1;
            this.g.y1 -= speed;
            this.g.x2 = this.g.x2;
            this.g.y2 -= speed;
    
            //// Ellipse 
            this.el.x =  this.el.x;
            this.el.y -= speed;
        }
        else if (this.direction === 2)
        {
            this.c.x += speed;
            this.c.y = this.c.y;

            //// Gradient 
            this.g.x1 += speed;
            this.g.y1 = this.g.y1;
            this.g.x2 += speed;
            this.g.y2 = this.g.y2;

            //// Ellipse 
            this.el.x += speed;
            this.el.y = this.el.y;

       
        }
        else if ( this.direction == 3 )
        {
            this.c.x = this.c.x;
            this.c.y  += speed;
    
            //// Gradient 
            this.g.x1 = this.g.x1;
            this.g.y1 += speed;
            this.g.x2 = this.g.x2;
            this.g.y2 += speed;
    
            //// Ellipse 
            this.el.x =  this.el.x;
            this.el.y += speed;
        }

        else
        {
            this.c.x += speed;
            this.c.y += speed;
    
            //// Gradient 
            this.g.x1 += speed;
            this.g.y1 += speed;
            this.g.x2 += speed;
            this.g.y2 += speed;
    
            //// Ellipse 
            this.el.x += speed;
            this.el.y += speed;
        }

        


    } // move()

    // resetCoordinate() 
    // {
    //     // Ellipse 
    //     this.el.x = 50;

    //     // Gradient 
    //     this.g.x1 = 45;
    //     this.g.y1 = 75;

    //     // Circle 
    //     this.c.x = 90;


    //     // Ellipse 
    //     this.el.y = 60;

    //     // Gradient 
    //     this.g.x2 = 90;
    //     this.g.y2 = 90;
        

    //     // Circle 
    //     this.c.y = 90;
    // } // end resetCoordinate()

    resetCoordinate() 
    {
        // Ellipse 
        this.el.x = 50;

        // Gradient 
        this.g.x1 = 45;
        this.g.y1 = 750;

        // Circle 
        this.c.x = 90;


        // Ellipse 
        this.el.y = 800;

        // Gradient 
        this.g.x2 = 90;
        this.g.y2 = 80;
        

        // Circle 
        this.c.y = 800;
    } // end resetCoordinate()



    DrawCircleOnCanvas() 
    {

        //// Create gradients 
        var radgrad = this.ctx.createRadialGradient(this.g.x1, this.g.y1, this.g.r1, this.g.x2, this.g.y2, this.g.r2);

        radgrad.addColorStop(0.7, '#A7D30C');
        radgrad.addColorStop(0.25, '#019f62');


        this.ctx.beginPath()
        this.ctx.fillStyle = radgrad;
        this.ctx.arc(this.c.x, this.c.y, this.c.r, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();


        //// Adding ellipse 
        //// Ref: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
        //// void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, counterclockwise]);
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.ellipse(this.el.x, this.el.y, this.el.radiusX, this.el.radiusY, Math.PI * 0.20, 0, 2 * Math.PI);
        this.ctx.fill();

    } // end CircleWithGradient()


} // end class DrawGradientCircle 