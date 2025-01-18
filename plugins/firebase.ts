import { defineNuxtPlugin } from '#app';
import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyAF5QS_ML563VnvpsBb8nhpQHvw3Le1q_E",
    authDomain: "my-web-project2025-2b2a5.firebaseapp.com",
    projectId: "my-web-project2025-2b2a5",
    storageBucket: "my-web-project2025-2b2a5.appspot.com",
    messagingSenderId: "195290407904",
    appId: "1:195290407904:web:4de9adfe616ec7ad5b4185",
    measurementId: "G-QY6CQK9JDE",
  };

  // Firebase uygulamasını başlat veya mevcut olanı kullan
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

  // Firebase servislerini başlat
  const auth = getAuth(app);
  const db = getFirestore(app);

  // Analytics sadece tarayıcıda çalışır
  if (typeof window !== 'undefined' && getApps().length === 1) {
    getAnalytics(app);
  }

  // Firebase servislerini provide ile Nuxt'a dahil et
  return {
    provide: {
      firebaseApp: app,
      firebaseAuth: auth,
      firebaseDB: db,
    },
  };
});
