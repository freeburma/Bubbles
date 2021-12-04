let num = 1; 
let xPos = 0; 
let yPos = 0;

let max_xPos = window.screen.width - 200;
let max_yPos = window.screen.height - 200;


function CreateBubbleContainer()
{
    let myContainer = document.querySelector('.myContainer'); 
    myContainer.innerHTML += ` 
                            <div class="bubbleContainer">
                                <div class="bubble"></div>
                            </div>
                            `; 
}

function GenerateRandomPosition()
{
    let l_xPos = Math.random() * max_xPos; 
    let l_yPos = Math.random() * max_yPos; 


    return { l_xPos, l_yPos }; 
}





console.log(`Screen: ${max_xPos} : ${max_yPos} px`);

function InterValFunction()
{
    console.log(`${num} : margin ${xPos}`);
    let boxElement = document.getElementById('bubble_1'); 

    //// Generating the Random Num
    let generateCoordinate = GenerateRandomPosition(); 

    boxElement.style.left = generateCoordinate.l_xPos + 'px'; 
    boxElement.style.top = generateCoordinate.l_yPos + 'px'; 

    // let windowWidth = window.screen.width; 
    // let windowHeight = window.screen.height; 

    //// Checking the screen width
    // if ( xPos < max_xPos && yPos < max_xPos)
    // {
    //     xPos += 100; 
    //     yPos += 100; 
    // }
    // else 
    // {
    //     xPos = 100; 
    //     yPos = 100; 
    // }

    if ( xPos < max_xPos && yPos < max_xPos)
    {
        xPos = 0; 
        yPos = 0; 
    }


    num ++; 

}

setInterval(() => InterValFunction(), 1000); 


// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
