import firebaseConfig from "../../firebaseConfig";

export default function() {
  const firebase = require("firebase/app");
  require("firebase/database");

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return firebase;
}
