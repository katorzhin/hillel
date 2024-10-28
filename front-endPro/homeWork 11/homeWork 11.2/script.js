const textBlock = document.getElementById("text-block");
const toggleButton = document.getElementById("color-toggle-button");

let isOriginalColor = true;
const originalColor = textBlock.style.color;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

toggleButton.addEventListener("click", function () {
  if (isOriginalColor) {
    textBlock.style.color = getRandomColor();
  } else {
    textBlock.style.color = originalColor;
  }

  isOriginalColor = !isOriginalColor;
});
