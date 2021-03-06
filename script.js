let num = 1; 

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

function GenerateRandomPosition(id)
{
    console.log(`Id: ${id}`);

    let l_xPos = Math.floor(Math.random() * max_xPos); 
    let l_yPos = Math.floor(Math.random() * max_yPos); 


    return { l_xPos, l_yPos }; 
}

function GenerateRandomPosition()
{
    let l_xPos = Math.floor(Math.random() * max_xPos); 
    let l_yPos = Math.floor(Math.random() * max_yPos); 


    return { l_xPos, l_yPos }; 
}





console.log(`Screen: ${max_xPos} : ${max_yPos} px`);

let isMove = true; 

function generateColor()
{
    let hexSet = "012345678ABCDEF"; 
    let finalHexString = "#"; 

    for (let i = 0; i < 6; i++)
    {
        finalHexString += hexSet[Math.ceil(Math.random() * 15)]; 
    }// end for 

    return finalHexString; 
    
}// end generateColor()

function GetRGB_Color()
{
    return Math.random() * 255; 
}

function InterValFunction()
{
    let boxElement = document.getElementById('bubble_1'); 
    let boxElementChild = boxElement.childNodes; 
    boxElementChild[1].style.border = `1px solid ${generateColor()}`; 
    boxElementChild[1].style.boxShadow = `inset 10px 10px 10px rgba(${GetRGB_Color()}, ${GetRGB_Color()}, ${GetRGB_Color()}, 0.6), 
                                  inset 20px 20px 20px rgba(${GetRGB_Color()}, ${GetRGB_Color()}, ${GetRGB_Color()}, 0.8)
                                  `; 


    if (isMove)
    {

        //// Generating the Random Num
        let generateCoordinate = GenerateRandomPosition(); 
        // console.log(`[x: ${generateCoordinate.l_xPos}, y: ${generateCoordinate.l_yPos}]`);


        boxElement.style.left = generateCoordinate.l_xPos + 'px'; 
        boxElement.style.top = 100 + 'px'; 

        isMove = false; 
    }// end if 

    let rect = boxElement.getBoundingClientRect(); 
    // console.log(rect);

    let xPos = rect["x"]; 

    if (xPos >= max_xPos)
    {
        xPos = 100; 
    }


    let yPos = rect["y"]; 
    if (yPos >= max_yPos)
    {
        yPos = 100; 
    } 


    
    xPos += 0.05; 
    // yPos += 20; 

    boxElement.style.left = xPos + 'px'; 
    boxElement.style.top = yPos + 'px'; 

    // console.log(`[xR: ${rect["x"]}, yR: ${rect["y"]}] => [x: ${xPos}, y: ${yPos}]`);

    window.requestAnimationFrame(InterValFunction); 

    
}

window.requestAnimationFrame(InterValFunction)


// setInterval(() => InterValFunction(), 1000); 

// while(true)
// {
    

//     setTimeout(InterValFunction, 10); 
// }// end while


// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
// CreateBubbleContainer(); 
