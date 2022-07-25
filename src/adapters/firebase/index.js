import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { errorMessage } from "../../utils/toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB3aDOWE8CcjZ7DKLcVLuok49IqhLu3mSY",
  authDomain: "finance-e4c66.firebaseapp.com",
  projectId: "finance-e4c66",
  storageBucket: "finance-e4c66.appspot.com",
  messagingSenderId: "521272776961",
  appId: "1:521272776961:web:142570dc909cf8e8956300",
  measurementId: "G-KNNP1PQC1X",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      localStorage.setItem("user", JSON.stringify(result.user));
    })
    .catch((error) => errorMessage(error));

export const isLogedIn = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return !!user?.uid;
};
