import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig()

const firebaseConfig = {
  apiKey: "AIzaSyB4YFG3e1n81PmYHGcVE6cnjaM4Hfzcmvo",
  authDomain: "my-web-project2025.firebaseapp.com",
  projectId: "my-web-project2025",
  storageBucket: "my-web-project2025.firebasestorage.app",
  messagingSenderId: "351407598944",
  appId: "1:351407598944:web:fec994457bc35dcb2a8205",
  measurementId: "G-RENZF83JTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

// (İsteğe bağlı) Analytics servisi
if (typeof window !== 'undefined') {
  getAnalytics(app)
}

// Artık app ve auth nesnelerini return ediyoruz ki,
// kullanmak istediğimiz yerde this.$firebaseApp veya this.$firebaseAuth diye erişebilelim
return {
  provide: {
    firebaseApp: app,
    firebaseAuth: auth
  }
}
})

//export { auth, createUserWithEmailAndPassword };