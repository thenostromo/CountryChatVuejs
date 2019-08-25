import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCIPb8m-duVD8c4p11ZqQp53mq1kuweu-o",
  authDomain: "country-chat-vuejs.firebaseapp.com",
  databaseURL: "https://country-chat-vuejs.firebaseio.com",
  projectId: "country-chat-vuejs",
  storageBucket: "",
  messagingSenderId: "1048917782681",
  appId: "1:1048917782681:web:7abba3bc4fdb99df"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
