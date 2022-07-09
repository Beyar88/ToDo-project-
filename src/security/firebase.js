import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FapiKey,
  authDomain: process.env.REACT_APP_FauthDomain,
  projectId: process.env.REACT_APP_FprojectID,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_FappID,
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
