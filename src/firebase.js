import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyACzJ8IB-JvL61H9Rh0f7jixWJG4W2M-Yo',
  authDomain: 'react-2022-1c3ab.firebaseapp.com',
  projectId: 'react-2022-1c3ab',
  storageBucket: 'react-2022-1c3ab.appspot.com',
  messagingSenderId: '438396410922',
  appId: '1:438396410922:web:179eb26d4ff3ac8c567753',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
