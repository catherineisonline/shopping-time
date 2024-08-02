import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
const API_KEY = process.env.REACT_APP_API_KEY;
const AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN
const PROJECT_ID = process.env.REACT_APP_PROJECT_ID
const STORAGE_BUCKET = process.env.REACT_APP_STORAGE_BUCKET
const MESSAGING_ID =  process.env.REACT_APP_MESSAGING_ID
const APP_ID = process.env.REACT_APP_APP_ID
const MEASUREMENT_ID = process.env.REACT_APP_MEASUREMENT_ID

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const products_database = getFirestore(app);
export default products_database;