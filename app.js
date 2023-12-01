const boxContainer = document.getElementById("box-container");
let currentBox = 0;
let rotateDeg = 90;
const circleFallingLimit =Math.floor(boxContainer.getBoundingClientRect().top - 50);

console.log(circleFallingLimit);
const colors = ["blue", "yellow", "red", "green"];


function get_random_number(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function circleInBasket(circleElement){
    const elementID = circleElement.id;
    console.log(elementID,currentBox);
    if(elementID == currentBox){
        console.log("ball in basket");
        document.body.removeChild(circleElement);
        startGame()    
    }else{
        document.body.removeChild(circleElement);
       
    }
}
function setAnimation(circleElement){
    let speed = get_random_number(1,5)
    let number = 0;
        let fallCircleElement = setInterval(()=>{
            circleElement.style.top = `${number++}px`;
            if(number == circleFallingLimit){
                circleInBasket(circleElement)
                clearInterval(fallCircleElement)
                console.log(number);
            }
        },speed)
}

function roatateBox(){
    console.log(currentBox);
    boxContainer.style.transform = `rotate(${rotateDeg}deg)`;
    rotateDeg += 90;
  
}
function roatateBoxCondition(){
    currentBox++
    if(currentBox > 3){
        currentBox = 0;
    }
     roatateBox()
}
function startGame(){
    const isPresentCircle = document.querySelector(".circle");
    if(isPresentCircle){
        roatateBoxCondition()
    }else{
        const cirle = document.createElement("div");
        const randomColorIndex = get_random_number(0,4);
        cirle.id = randomColorIndex;
        console.log(cirle.id);
        cirle.classList.add("circle");
        cirle.style.backgroundColor = colors[randomColorIndex];
        document.body.appendChild(cirle)
        setAnimation(cirle)
    }
}


boxContainer.addEventListener("click",startGame)

