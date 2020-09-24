import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyCVUog689XPOY6m8QGFo1__A_04f1Bb9Fk",
    authDomain: "portfolio-builder-9cbf2.firebaseapp.com",
    databaseURL: "https://portfolio-builder-9cbf2.firebaseio.com",
    projectId: "portfolio-builder-9cbf2",
    storageBucket: "portfolio-builder-9cbf2.appspot.com",
    messagingSenderId: "182687496066",
    appId: "1:182687496066:web:c49035c15beee04072419b"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;