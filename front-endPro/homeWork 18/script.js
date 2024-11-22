class CountdownTimer {
    #intervalId = null;
    #isRunning = false;

    constructor(startTime, targetElement) {
        this.startTime = startTime;
        this.timeRemaining = startTime;
        this.element = document.querySelector(targetElement);
    }

    startTimer = () => {
        if (this.#isRunning) return;

        if (this.timeRemaining <= 0) {
            this.timeRemaining = this.startTime;
        }

        this.#isRunning = true;

        this.#intervalId = setInterval(() => {
            if (this.timeRemaining <= 0) {
                this.stopTimer();
            } else {
                this.timeRemaining--;
                this.updateDisplay();
            }
        }, 1000);

        this.updateDisplay();
    };

    stopTimer = () => {
        clearInterval(this.#intervalId);
        this.#isRunning = false;
        this.#intervalId = null;
    };

    updateDisplay = () => {
        this.element.textContent = new Date(this.timeRemaining * 1000).toISOString().slice(14, 19);
    };
}

const startTimeInSeconds = 90;

const timer = new CountdownTimer(startTimeInSeconds, '#timer');

document.getElementById('start').addEventListener('click', timer.startTimer);
