import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FapiKey,
  authDomain: process.env.FauthDomain,
  projectId: process.env.FprojectID,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.FappID,
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
