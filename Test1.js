// ===== FIREBASE CONFIG =====
const firebaseConfig = {
    apiKey: "AIzaSyD3vzNfjinpWOmibcI0SNcy_9Leb_98Uzw",
    authDomain: "testfixtures-a7abd.firebaseapp.com",
    projectId: "testfixtures-a7abd",
    storageBucket: "testfixtures-a7abd.appspot.com",
    messagingSenderId: "248261491824",
    appId: "1:248261491824:web:aa099a9f44161e2ad748b5",
    measurementId: "G-FDY4LLXBYM"
};

// ===== FIREBASE INIT =====
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();


// ===== THEME FUNCTIONS =====
function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        console.log("🌙 Dark mode applied");
    } else {
        document.body.classList.remove("dark-mode");
        console.log("☀️ Light mode applied");
    }
}

function attachThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) {
        console.warn("⚠️ Theme toggle button not found (navbar may not be loaded yet)");
        return;
    }

    // Apply saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Handle toggle
    toggleBtn.addEventListener("click", () => {
        let currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        let newTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        console.log("🔄 Theme changed to:", newTheme);
    });
}


// ===== NAVBAR LOADER =====
document.addEventListener("DOMContentLoaded", () => {
    // Load navbar dynamically
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            attachThemeToggle(); // ✅ Ensure the button now exists before attaching logic
        })
        .catch(err => console.error("❌ Navbar load failed:", err));

    // Load saved theme (in case navbar fails)
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
});
