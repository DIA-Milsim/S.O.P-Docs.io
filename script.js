document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Load Dark Mode Preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀ Light Mode";
    }

    // Toggle Dark Mode
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            darkModeToggle.textContent = "☀ Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            darkModeToggle.textContent = "🌙 Dark Mode";
        }
    });
});

// Function to load content dynamically
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content-area").innerHTML = data;
        })
        .catch(error => console.error("Error loading page:", error));
}
