var acceleration = false;
var exponential = 1;
var keyboardState = true;
var velocity = 0;
var milisec = 0;
const output = document.getElementById('output');
const velocityOutput = document.getElementById('velocity')

var forward = false;
var backward = false;
var left = false;
var right = false;
document.addEventListener('keydown', e => {
    if (keyboardState){
        switch (e.keyCode){
            case 38:
                forward = true;
                break;
            case 37:
                left = true;
                break;
            case 40:
                backward = true;
                break;
            case 39:
                right = true;
                break;
        }
        if ((forward || left || backward || right) && e.keyCode == 32){
            acceleration = true;
        }
    }
})

document.addEventListener('keyup', e => {
    if (keyboardState){
        switch (e.keyCode){
            case 38:
                forward = false;
                break;
            case 37:
                left = false;
                break;
            case 40:
                backward = false;
                break;
            case 39:
                right = false;
                break;
        }
        if (e.keyCode == 32){
            acceleration = false;
        }
    }
})

function realTime(){
    milisec += 50;
    switch (true){
        case (forward && left):
            output.innerHTML = '<img class="arrow" src="images/up_left_arrow.png" alt="up_left_arrow">'
            break;
        case (forward && right):
            output.innerHTML = '<img class="arrow" src="images/up_right_arrow.png" alt="up_right_arrow">'
            break;
        case (backward && left):
            output.innerHTML = '<img class="arrow" src="images/down_left_arrow.png" alt="down_left_arrow">'
            break;
        case (backward && right):
            output.innerHTML = '<img class="arrow" src="images/down_right_arrow.png" alt="down_right_arrow">'
            break;
        case (forward):
            output.innerHTML = '<img class="arrow" src="images/up_arrow.png" alt="up_arrow">'
            break;
        case (left):
            output.innerHTML = '<img class="arrow" src="images/left_arrow.png" alt="left_arrow">'
            break;
        case (backward):
            output.innerHTML = '<img class="arrow" src="images/down_arrow.png" alt="down_arrow">'
            break;
        case (right):
            output.innerHTML = '<img class="arrow" src="images/right_arrow.png" alt="right_arrow">'
            break;
        default:
            output.innerHTML = 'N/A';
    }

    if (milisec % 200 == 0 && velocity >= 0  && velocity <= 100){
        if ((forward || left || backward || right) && acceleration){
            if (velocity != 100){
                velocity += 1;
            }
        }
        else{
            if (velocity != 0){
                velocity -= 1
            }
        }
        velocityOutput.innerHTML = velocity;
    }
}

function toggle(){
    if (keyboardState){
        keyboardState = false;
        document.getElementById('toggle').style.backgroundColor = 'red';
    }
    else{
        keyboardState = true;
        document.getElementById('toggle').style.backgroundColor = 'white';
    }
}

setInterval(realTime, 30); //this changes the speed at which the status of the direction of velocity is changing (e.g. from left to forward)

