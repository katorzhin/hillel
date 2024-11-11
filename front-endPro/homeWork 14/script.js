const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg"
];
let currentIndex = 0;

const imageDisplay = document.getElementById("image-display");
const dotsContainer = document.getElementById("dots-container");


function updateSlider() {
    imageDisplay.src = images[currentIndex];
    updateDots();
    updateButtons();
}


function updateButtons() {
    document.getElementById("prev").style.display = currentIndex === 0 ? "none" : "block";
    document.getElementById("next").style.display = currentIndex === images.length - 1 ? "none" : "block";
}


function createDots() {
    images.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.dataset.index = index;
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

createDots();
updateSlider();
