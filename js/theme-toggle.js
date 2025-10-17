// ===== 🌙 THEME TOGGLE (Robust, Global) =====
(function () {
    // 1) Apply saved theme immediately (prevents flash)
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark-mode");
    } else if (saved === "light") {
        document.body.classList.remove("dark-mode");
    }
    // If no saved theme, do nothing (falls back to CSS default)

    // 2) Helper to set the button icon if the button exists
    function setToggleIcon(btn) {
        if (!btn) return;
        btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    }

    // 3) Event delegation: listen for clicks anywhere and react if toggle clicked
    document.addEventListener("click", (e) => {
        // Works even if the button was inserted later
        const target = e.target;
        if (!target) return;

        // Accept click on the button or an inner element (e.g. icon)
        if (target.id === "themeToggle" || (target.closest && target.closest("#themeToggle"))) {
            document.body.classList.toggle("dark-mode");

            const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
            localStorage.setItem("theme", newTheme);

            // Update the button icon if present
            const btn = document.getElementById("themeToggle");
            setToggleIcon(btn);
        }
    });

    // 4) Poll briefly for the toggle button to appear and then set the correct icon
    (function waitForButton(retries = 30, interval = 100) {
        const btn = document.getElementById("themeToggle");
        if (btn) {
            setToggleIcon(btn);
            return;
        }
        if (retries <= 0) return;
        setTimeout(() => waitForButton(retries - 1, interval), interval);
    })();

    // 5) Also respond if someone changes theme.classList manually elsewhere:
    //    keep button icon in sync
    const observer = new MutationObserver(() => {
        const btn = document.getElementById("themeToggle");
        if (btn) setToggleIcon(btn);
    });
    observer.observe(document.documentElement || document.body, { attributes: true, attributeFilter: ["class"], subtree: false });
})();
