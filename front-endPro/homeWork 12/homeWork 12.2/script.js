document
  .getElementById("button-container")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const buttonText = event.target.textContent;
      alert("Клікнуто на кнопці: " + buttonText);
      console.log(event.target);
    }
  });
