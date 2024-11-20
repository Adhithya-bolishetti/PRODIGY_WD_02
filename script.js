console.log("Stopwatch with Lap Times");

let tens = 0;
let seconds = 0;
let minutes = 0;
let interval = null;
let lapCount = 0;

// Selectors for stopwatch elements
const getMinutes = document.querySelector('.minutes');
const getSeconds = document.querySelector('.seconds');
const getTens = document.querySelector('.tens');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');
const btnLap = document.querySelector('.btn-lap');
const lapList = document.querySelector('.lap-list'); // Correct class selector

// Function to update the stopwatch display
const updateStopwatch = () => {
    tens++;
    if (tens > 99) {
        seconds++;
        tens = 0;
    }
    if (seconds > 59) {
        minutes++;
        seconds = 0;
    }

    getTens.innerHTML = tens < 10 ? '0' + tens : tens;
    getSeconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    getMinutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
};

// Event listeners for Start, Stop, Reset, and Lap buttons
btnStart.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(updateStopwatch, 10);
    }
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    tens = seconds = minutes = 0;
    lapCount = 0;
    getTens.innerHTML = '00';
    getSeconds.innerHTML = '00';
    getMinutes.innerHTML = '00';
    lapList.innerHTML = ''; // Clear lap records
});

btnLap.addEventListener('click', () => {
    if (interval) {
        const lapTime = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${tens < 10 ? '0' + tens : tens}`;
        const lapElement = document.createElement('li');
        lapElement.textContent = `Lap ${++lapCount}: ${lapTime}`;
        lapList.appendChild(lapElement); // Append lap time to the list
    }
});
