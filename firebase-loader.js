// ===== 🔥 Firebase Loader Script (Global Initialization) =====

// Check if Firebase is already initialized
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

// Make Firebase globally available
window.auth = firebase.auth();
window.db = firebase.firestore();

// Let other scripts know Firebase is ready
window.firebaseReady = new Promise((resolve) => {
    firebase.auth().onAuthStateChanged(() => {
        console.log("✅ Firebase fully loaded and ready");
        resolve();
    });
});
