const firebaseConfig = {
    apiKey: "AIzaSyD3vzNfjinpWOmibcI0SNcy_9Leb_98Uzw",
    authDomain: "testfixtures-a7abd.firebaseapp.com",
    projectId: "testfixtures-a7abd",
    storageBucket: "testfixtures-a7abd.appspot.com",
    messagingSenderId: "248261491824",
    appId: "1:248261491824:web:aa099a9f44161e2ad748b5",
    measurementId: "G-FDY4LLXBYM"
};

// ===== THEME TOGGLE =====
function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        console.log("🌙 Dark mode applied");
    } else {
        document.body.classList.remove("dark-mode");
        console.log("☀️ Light mode applied");
    }
}

// Run after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    // Load saved theme
    let savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Hook up toggle button if it exists
    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            let currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
            let newTheme = currentTheme === "dark" ? "light" : "dark";

            applyTheme(newTheme);
            localStorage.setItem("theme", newTheme); // Save choice
            console.log("🔄 Theme changed to:", newTheme);
        });
    } else {
        console.warn("⚠️ Theme toggle button not found on this page");
    }
});

// ===== FIREBASE INIT =====
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
