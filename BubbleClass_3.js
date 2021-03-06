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

        this.id = id; 
        this.color_1 = color_1; 
        this.color_2 = color_2; 

        this.directionCount = 1; 
        this.direction = direction; // Direction
        this.speed = speed;


        this.ctx = ctx; 
        
        this.canvasWidth = canvasWidth; 
        this.canvasHeight = canvasHeight; 

        this.cy = 0; 

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

        
    
    move(direction) // Controlling by Keyboard 
    {

        
        
        /*================================================================================================ 
            Checking the bubbles coordinates and making sure they are still on our canvas. 
        ================================================================================================*/
        console.log(`[D: ${this.direction} => c: ${this.c.x}, ${this.c.y}], g: [${this.g.x1}, ${this.g.y1}, ${this.g.x2}, ${this.g.y2}], el: [${this.el.x}, ${this.el.y}]]`);


        
       
        /*================================================================================================ 
            Controlling Direction 
        ================================================================================================*/
        if (direction == 0)
        {
            this.LeftToRight(); 
        }
        else if (direction == 1)
        {
           this.TopToBottom(); 
        }
        else if (direction == 2)
        {
            this.RightToLeft(); 
        }
        else if (direction == 3)
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
       
       
        


    } // move()

    

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