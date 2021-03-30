import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC1P8n779mVMbBJ3Mv4Exl3SLBOyOUyaks",
    authDomain: "linkedin-clone-8a26e.firebaseapp.com",
    projectId: "linkedin-clone-8a26e",
    storageBucket: "linkedin-clone-8a26e.appspot.com",
    messagingSenderId: "100725531933",
    appId: "1:100725531933:web:e4c80fce7be3adfc6dadf4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }