// script.js
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-counter');
    const inputNumber = document.getElementById('input-number');
    const counterValue = document.getElementById('counter-value');

    startButton.addEventListener('click', () => {
        const maxCount = parseInt(inputNumber.value);

        // Validate if the input is a valid number between 1 and 9
        if (isNaN(maxCount) || maxCount < 1 || maxCount > 9) {
            alert('Please enter a valid number between 1 and 9.');
            return;
        }

        // Start the counter
        let currentCount = 1;
        counterValue.textContent = currentCount;

        const interval = setInterval(() => {
            currentCount++;

            if (currentCount <= maxCount) {
                counterValue.textContent = currentCount;
            } else {
                clearInterval(interval);
            }
        }, 1000); // Update the counter every 1000ms (1 second)
    });
});
