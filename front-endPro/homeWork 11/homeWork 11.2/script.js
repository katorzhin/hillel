const textBlock = document.getElementById("text-block");
const toggleButton = document.getElementById("color-toggle-button");

toggleButton.addEventListener("click", function () {
    textBlock.classList.toggle("toggled-color");
});
