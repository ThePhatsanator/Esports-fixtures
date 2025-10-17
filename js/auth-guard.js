// ===== 🔐 Auth Guard Script =====
// Ensures only signed-in users can access protected pages.

window.firebaseReady.then(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            console.warn("⛔ Access blocked: user not signed in.");
            alert("You must be signed in to access this page.");
            window.location.href = "login.html"; // change to your actual login page
        } else {
            console.log("✅ Authenticated:", user.email);
        }
    });
});
