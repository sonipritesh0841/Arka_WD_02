// Function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change background color every second
setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
}, 1000);

// Stopwatch functionality
let timerInterval;
let timeElapsed = 0;

// Start the stopwatch
document.getElementById('start').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeElapsed++;
        document.getElementById('time-display').textContent = new Date(timeElapsed * 1000).toISOString().substr(11, 8);
    }, 1000);
});

// Pause the stopwatch
document.getElementById('pause').addEventListener('click', () => {
    clearInterval(timerInterval);
});

// Reset the stopwatch
document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    timeElapsed = 0;
    document.getElementById('time-display').textContent = '00:00:00';
});

// Add lap functionality
document.getElementById('lap').addEventListener('click', () => {
    const lapTimes = document.getElementById('lap-times');
    const lapTime = document.createElement('li');
    lapTime.textContent = document.getElementById('time-display').textContent;
    lapTimes.appendChild(lapTime);
});

