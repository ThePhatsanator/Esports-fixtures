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

// ===== SAFE FIREBASE INITIALIZATION =====
window.firebaseReady = new Promise((resolve, reject) => {
    try {
        // Initialize only if not already done
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log("🔥 Firebase initialized (first load)");
        } else {
            console.log("♻️ Firebase already initialized");
        }

        // Make Firebase global
        window.db = firebase.firestore();
        window.auth = firebase.auth();

        console.log("✅ Firebase fully loaded and ready");
        resolve();
    } catch (error) {
        console.error("❌ Firebase failed to load:", error);
        reject(error);
    }
});
