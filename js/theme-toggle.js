// ===== 🌙 THEME TOGGLE (GLOBAL SCRIPT) =====
const currentTheme = localStorage.getItem("theme") || "dark";

// Restore the user's saved theme preference
(function () {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Find the toggle button if it exists
    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        // Set initial icon based on theme
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
            localStorage.setItem("theme", newTheme);

            themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
        });
    }
})();
