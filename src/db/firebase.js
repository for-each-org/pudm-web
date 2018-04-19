import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCpSftMSIMYXDOaX92CkOL_QgrXyiqex1c",
    authDomain: "pudm-server.firebaseapp.com",
    databaseURL: "https://pudm-server.firebaseio.com",
    projectId: "pudm-server",
    storageBucket: "pudm-server.appspot.com",
    messagingSenderId: "1021440757187"
  };
  firebase.initializeApp(config);
}
export default firebase;