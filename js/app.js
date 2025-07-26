// js/app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { firebaseConfig } from './firebase-config.js';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase conectado com sucesso!");
