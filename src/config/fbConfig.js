import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBeAAjjWniUuF1ImDDoDOFo5dl7l1g0J50",
  authDomain: "net-ninja-marioplan-e0911.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-e0911.firebaseio.com",
  projectId: "net-ninja-marioplan-e0911",
  storageBucket: "",
  messagingSenderId: "339621936172",
  appId: "1:339621936172:web:3c49a66425a5c7a3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;