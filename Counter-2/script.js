 /*variable to fetch the input from user*/
const display = document.querySelector('.display');
 
/*varibale to add eventlistener on button, i.e triggered when clicked*/
const startButton = document.querySelector('.start-timer'); 

/*we have used h1 to display the timer inside a div, this will collect all h1 in a array like structure.*/
const output = document.querySelectorAll('.timer-box h1'); 

// event listener on startButton

startButton.addEventListener('click', () => {
    const targetNumber = parseInt(display.value); /*fetching input from user*/

    if (targetNumber > 99999 || targetNumber < 1 || (!targetNumber % 1 != 0)) {
    alert("Enter a Valid Number");
        clearDisplayInput();
        return;
}

    startCounter(targetNumber); //function call
});

function startCounter(targetNumber) {
    let currentNumber = 0;   //this number will be used for creating a timer

    var interval = setInterval(() => {   // we need to repeat the interval so we will keep a setIneterval
        if (currentNumber <= targetNumber) {

            // folliwng are complicated yet simple functions.

            //it will convert the numbers into 5 digit--> eg, 23, 00023.
            const numberArray = currentNumber.toString().padStart(5, '0').split(''); 


            numberArray.forEach((digit, index)=> {
                output[index].textContent = digit;
            });
            
            currentNumber++;
        }
        else { 
            clearInterval(interval);
            clearDisplayInput();
        }
    }, 500);
    
}


function clearDisplayInput() {
    display.value = '';
}