import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyClk-bGyR_kILrDYQ8TvU7h-iSDQYJJ8f8",
  authDomain: "leaseease-c74a8.firebaseapp.com",
  projectId: "leaseease-c74a8",
  storageBucket: "leaseease-c74a8.appspot.com",
  messagingSenderId: "208438957731",
  appId: "1:208438957731:web:ab409d040b7e3f25981116"
};

const app = initializeApp(firebaseConfig);
export const imageDB=getStorage(app);
