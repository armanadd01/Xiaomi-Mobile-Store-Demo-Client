import { initializeApp } from "firebase/app";
 import firebaseConfig from "./firebase.config";
const authInitialize = () => {
    // Initiallize Firebase congif
    initializeApp(firebaseConfig);
}

export default authInitialize;