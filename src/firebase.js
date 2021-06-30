import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAi9ykVskpJXZrAI5uYa1dWoJR7O4W0iso",
    authDomain: "discord4a0.firebaseapp.com",
    projectId: "discord4a0",
    storageBucket: "discord4a0.appspot.com",
    messagingSenderId: "320266308831",
    appId: "1:320266308831:web:3958c0e5a36b9002e22d6a"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()


  export {auth, provider, db}