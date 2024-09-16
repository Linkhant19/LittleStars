// My page will scroll to the bottom when the window is loaded.
window.onload = function () {
    // to make sure that the content is fully loaded. 
    requestAnimationFrame(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
};

// When up arrow is clicked, scroll up by 50px.
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        window.scrollBy(0, -50);
    }
});

// I will implement touch detection for mobile devices. 
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener("touchstart", function (event) {
    touchStartY = event.changedTouches[0].screenY;
});

document.addEventListener("touchend", function (event) {
    touchEndY = event.changedTouches[0].screenY;
    if (touchStartY < touchEndY) {
        window.scrollBy(0, -50);
    }
});



