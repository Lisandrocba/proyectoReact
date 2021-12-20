import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCt2IkCqpsNA-ku21ImqrEJb19CTfq5VJo",
  authDomain: "proyecto-coder-react-cbd13.firebaseapp.com",
  projectId: "proyecto-coder-react-cbd13",
  storageBucket: "proyecto-coder-react-cbd13.appspot.com",
  messagingSenderId: "919717005682",
  appId: "1:919717005682:web:cad094f3176dc624f6f5eb"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
  <App />
</Router>,
  document.getElementById('root')
);


