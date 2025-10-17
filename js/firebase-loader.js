// ===== 🔥 Firebase Loader Script (Global Initialization) =====

// 1️⃣ Ensure Firebase SDK is actually available
if (typeof firebase === "undefined") {
    console.error("❌ Firebase SDK not loaded yet!");
} else {
    // 2️⃣ Initialize app only once
    if (!firebase.apps.length) {
        firebase.initializeApp({
            apiKey: "AIzaSyD3vzNfjinpWOmibcI0SNcy_9Leb_98Uzw",
            authDomain: "testfixtures-a7abd.firebaseapp.com",
            projectId: "testfixtures-a7abd",
            storageBucket: "testfixtures-a7abd.appspot.com",
            messagingSenderId: "248261491824",
            appId: "1:248261491824:web:aa099a9f44161e2ad748b5",
            measurementId: "G-FDY4LLXBYM"
        });
    }

    // 3️⃣ Create a promise that resolves once Firebase is ready
    window.firebaseReady = new Promise((resolve) => {
        // Wait until Firebase Auth system is initialized
        firebase.auth().onAuthStateChanged(() => {
            console.log("✅ Firebase fully loaded and ready");

            // Expose Firestore and Auth globally once it’s safe
            window.db = firebase.firestore();
            window.auth = firebase.auth();

            resolve();
        });
    });
}
