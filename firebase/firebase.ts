
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATjI3c2jUj9o_iZAssXnAOrwcfQjAVXSk",
    authDomain: "appsportstreaming.firebaseapp.com",
    databaseURL: "https://appsportstreaming-default-rtdb.firebaseio.com",
    projectId: "appsportstreaming",
    storageBucket: "appsportstreaming.firebasestorage.app",
    messagingSenderId: "30488423506",
    appId: "1:30488423506:web:7a0ad3735b6c831890438b",
    measurementId: "G-3WSFLV06K6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
