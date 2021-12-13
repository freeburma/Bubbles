class DrawGradientCircle {
            

    constructor(ctx, id, color_1='#A7D30C', color_2='#019f62', canvasWidth, canvasHeight, direction, speed)
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

        this.id = id;                       // ID: to track collision (*** Not implemented yet)
        this.color_1 = color_1;             // Random color the parent
        this.color_2 = color_2;             // Random color inner

        this.directionCount = 1;            // The direction of the bubble
        this.direction = direction;         // Direction
        this.speed = speed;                 // Speed/steps per loop of the ball - which will control randomly


        this.ctx = ctx;                     // Canvas Context: Will draw bubbles on the canvas 
        
        this.canvasWidth = canvasWidth;     // Canvas Width 
        this.canvasHeight = canvasHeight;   // Canvas Height

        this.stepHistory = 0; 
        this.stepHistoryCheck = this.GetRandomValue(canvasWidth * 2); 

    }// end constructor()

    /* 
    Directions 
     direction: [
            0: left
            1: Top
            2: Right
            3: button
            4: Drop from top corner
            5: left yPos
            6. Top xPos
            7. Right yPos
            8. Button xPos
        ] 
        */
    LeftToRight() // 0
    {
        this.c.x -= this.speed;
        this.c.y = this.c.y;

        //// Gradient 
        this.g.x1 -= this.speed;
        this.g.y1 = this.g.y1;
        this.g.x2 -= this.speed;
        this.g.y2 = this.g.y2;

        //// Ellipse 
        this.el.x -= this.speed;
        this.el.y = this.el.y;
    }// end LeftToRight()

    

    TopToBottom() // 1
    {
        this.c.x = this.c.x;
        this.c.y -= this.speed;

        //// Gradient 
        this.g.x1 = this.g.x1;
        this.g.y1 -= this.speed;
        this.g.x2 = this.g.x2;
        this.g.y2 -= this.speed;

        //// Ellipse 
        this.el.x =  this.el.x;
        this.el.y -= this.speed;
    }// end TopToBottom()

   

    RightToLeft()
    {
        this.c.x += this.speed;
        this.c.y = this.c.y;

        //// Gradient 
        this.g.x1 += this.speed;
        this.g.y1 = this.g.y1;
        this.g.x2 += this.speed;
        this.g.y2 = this.g.y2;

        //// Ellipse 
        this.el.x += this.speed;
        this.el.y = this.el.y;

    }// end RightToLeft()

    

    BottomToTop()
    {
        this.c.x = this.c.x;
        this.c.y  += this.speed;

        //// Gradient 
        this.g.x1 = this.g.x1;
        this.g.y1 += this.speed;
        this.g.x2 = this.g.x2;
        this.g.y2 += this.speed;

        //// Ellipse 
        this.el.x =  this.el.x;
        this.el.y += this.speed;
    }// end BottomToTop()

    
    TopCornerToBottomRightCorner()
    {
        this.c.x += this.speed;
        this.c.y += this.speed;

        //// Gradient 
        this.g.x1 += this.speed;
        this.g.y1 += this.speed;
        this.g.x2 += this.speed;
        this.g.y2 += this.speed;

        //// Ellipse 
        this.el.x += this.speed;
        this.el.y += this.speed;
    }// end TopCornerToBottomRightCorner()

    TopCornerToBottomLeftCorner()
    {
        this.c.x -= this.speed;
        this.c.y += this.speed;

        //// Gradient 
        this.g.x1 -= this.speed;
        this.g.y1 += this.speed;
        this.g.x2 -= this.speed;
        this.g.y2 += this.speed;

        //// Ellipse 
        this.el.x -= this.speed;
        this.el.y += this.speed;
    }// end TopCornerToBottomRightCorner()

    BottomCornerToTopLeftCorner()
    {
        this.c.x -= this.speed;
        this.c.y -=  this.speed;

        //// Gradient 
        this.g.x1 -= this.speed;
        this.g.y1 -= this.speed;
        this.g.x2 -= this.speed;
        this.g.y2 -= this.speed;

        //// Ellipse 
        this.el.x -= this.speed;
        this.el.y -= this.speed;
    }// end BottomCornerToTopLeftCorner()

    BottomCornerToTopRightCorner()
    {
        this.c.x += this.speed;
        this.c.y -=  this.speed;

        //// Gradient 
        this.g.x1 += this.speed;
        this.g.y1 -= this.speed;
        this.g.x2 += this.speed;
        this.g.y2 -= this.speed;

        //// Ellipse 
        this.el.x += this.speed;
        this.el.y -= this.speed;
    }// end BottomCornerToTopLeftCorner()


    GetRandomValue(maxUpperLimit = 0) 
    {
        return Math.ceil(Math.random() * maxUpperLimit); 
    }


    /*
        TODO: 
        1. Bubbles have to drop from 4-corners 
        2. Bubble direction change randomly 
        3. Collision Detection then move to its coordinate 
        4. Bubble has 

        direction: [
            0: left
            1: Top
            2: Right
            3: button
            4: Drop from top corner
            5: left yPos
            6. Top xPos
            7. Right yPos
            8. Button xPos
        ] 
    */
    move() 
    {

        
        /*================================================================================================ 
            Checking the bubbles coordinates and making sure they are still on our canvas. 
        ================================================================================================*/
        // console.log(`[D: ${this.direction} => c: ${this.c.x}, ${this.c.y}], g: [${this.g.x1}, ${this.g.y1}, ${this.g.x2}, ${this.g.y2}], el: [${this.el.x}, ${this.el.y}]]`);

        
        // console.log(`Step History: ${this.stepHistory}, StepHisCount: ${this.stepHistoryCheck}`)
        this.stepHistory += this.speed


        if (this.c.x >= this.canvasWidth) 
        {
            // this.resetCoordinate();

            this.direction = 0; 
            this.directionCount += 1; 
            // console.log(`D: ${this.direction} =>c: [  x:${this.c.x}, y:${this.c.y}], g: [${this.g.x1}, ${this.g.y1}, ${this.g.x2}, ${this.g.y2}], el: [$${this.el.x}, ${this.el.y}]]`);
           
        };

        if (this.c.x <= 0) 
        {
            this.direction = 2; 
            this.directionCount += 1; 

            // console.log(`[D: ${this.direction} => c: ${this.c.x}, ${this.c.y}], g: [${this.g.x1}, ${this.g.y1}, ${this.g.x2}, ${this.g.y2}], el: [$${this.el.x}, ${this.el.y}]]`);

        }

        if (this.c.y >= this.canvasHeight)
        {
            this.direction = 1; 
            this.directionCount += 1; 

            // console.log(`[D: ${this.direction} => c: ${this.c.x}, ${this.c.y}], g: [${this.g.x1}, ${this.g.y1}, ${this.g.x2}, ${this.g.y2}], el: [$${this.el.x}, ${this.el.y}]]`);

        }

        if (this.c.y <= 0)
        {
            this.direction = 3; 
            this.directionCount += 1; 

            // console.log(`[D: ${this.direction} => c: ${this.c.x}, ${this.c.y}], g: [${this.g.x1}, ${this.g.y1}, ${this.g.x2}, ${this.g.y2}], el: [$${this.el.x}, ${this.el.y}]]`);

        }

        


       
        /*================================================================================================ 
            Controlling Direction 
        ================================================================================================*/
        if (this.direction == 0)
        {
            this.LeftToRight(); 
        }
        else if (this.direction == 1)
        {
           this.TopToBottom(); 
        }
        else if (this.direction == 2)
        {
            this.RightToLeft(); 
        }
        else if ( this.direction == 3 )
        {
           this.BottomToTop(); 
        }
        else if (direction == 4)
        {
            this.TopCornerToBottomRightCorner(); 
        }
        else if (direction == 5)
        {
            this.BottomCornerToTopLeftCorner(); 

        }
        else if (direction == 6)
        {
            
            this.TopCornerToBottomLeftCorner(); 
        }
        else 
        {
            this.BottomCornerToTopRightCorner(); 
        }
       

        //// Changing to random direction with "directionCount"
        if (this.directionCount > 5 || this.stepHistory >= this.stepHistoryCheck)
        {
            this.direction = Math.ceil(Math.random() * 8); 
            // this.direction = 4; 

            // console.log(`DCount: ${this.directionCount}`);

            this.speed = Math.ceil(Math.random() * 25) + 1; 

            this.directionCount = 0; 

            this.stepHistory = 0; 
            this.stepHistoryCheck = this.GetRandomValue(this.canvasWidth * 3); 
        }// end if


    } // move()

    // resetCoordinate() //// Original position 
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

    


    DrawCircleOnCanvas() 
    {

        //// Create gradients 
        var radgrad = this.ctx.createRadialGradient(this.g.x1, this.g.y1, this.g.r1, this.g.x2, this.g.y2, this.g.r2);

        // radgrad.addColorStop(0.7, '#A7D30C');
        // radgrad.addColorStop(0.25, '#019f62');

        radgrad.addColorStop(0.7, this.color_1);
        radgrad.addColorStop(0.25, this.color_2);


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