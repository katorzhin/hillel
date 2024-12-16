let savedUrl = "";

function setUrl() {
    const url = prompt("Please enter a URL:");
    if (url) {
        savedUrl = url;
        alert("URL saved: " + savedUrl);
    } else {
        alert("No URL entered");
    }
}

function goToUrl() {
    if (savedUrl) {
        window.location.href = savedUrl.startsWith("http://") || savedUrl.startsWith("https://")
            ? savedUrl
            : "https://" + savedUrl;
    } else {
        alert("Please enter a URL first by clicking the first button.");
    }
}

document.getElementById("button-container").addEventListener("click", function (event) {
    const action = event.target.getAttribute("data-action");

    if (action === "set-url") {
        setUrl();
    } else if (action === "redirect") {
        goToUrl();
    }
});