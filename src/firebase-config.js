// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdnP1bdwszHfR3_mNs4nG9wl2IYBHRw7I",
  authDomain: "residanat-site.firebaseapp.com",
  projectId: "residanat-site",
  storageBucket: "residanat-site.appspot.com",
  messagingSenderId: "436549024619",
  appId: "1:436549024619:web:a5853c5ab0c014db0a2a2e",
  measurementId: "G-8VZP3KEYB9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
