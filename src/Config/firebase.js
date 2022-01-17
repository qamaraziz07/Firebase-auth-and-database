import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxPic1g_v3Ehxtjcrx-6OmQB0CLXKDobw",
  authDomain: "dummy-auth-9db3f.firebaseapp.com",
  projectId: "dummy-auth-9db3f",
  storageBucket: "dummy-auth-9db3f.appspot.com",
  messagingSenderId: "546296933400",
  appId: "1:546296933400:web:63f92e73959fc64f90276d",
  measurementId: "G-PXKW1VFWXL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
