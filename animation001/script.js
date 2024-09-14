document.addEventListener("DOMContentLoaded", function () {
    const star = document.getElementById("star");
    const found = document.getElementById("found");

    star.addEventListener("mouseover", function() {
        star.classList.add("visible");
        found.classList.add("visible")
    });

});