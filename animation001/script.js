document.addEventListener("DOMContentLoaded", function () {
    const star = document.getElementById("star");
    const found = document.getElementById("found");
    const timer = document.getElementById("timer");

    let startTime = performance.now();
    let timerInterval;

    function updateTimer() {
        let currentTime = performance.now();
        let elapsedTime = currentTime - startTime;
        let seconds = Math.floor(elapsedTime / 1000);
        let milliseconds = Math.floor(elapsedTime % 1000);

        timer.textContent = `${seconds}s ${milliseconds}ms`;
    }

    timerInterval = setInterval(updateTimer, 10)

    star.addEventListener("mouseover", function() {
        star.classList.add("visible");
        found.classList.add("visible");
        clearInterval(timerInterval);
    });

});