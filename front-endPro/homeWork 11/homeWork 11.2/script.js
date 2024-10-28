const textBlock = document.getElementById("text-block");
const toggleButton = document.getElementById("color-toggle-button");

let isOriginalColor = true;

toggleButton.addEventListener("click", function () {
  if (isOriginalColor) {
    textBlock.style.color = "red";
  } else {
    textBlock.style.color = "black";
  }

  isOriginalColor = !isOriginalColor;
});
