<template>
  <div class="goz-makyaji">
    <!-- Ürün Listesi -->
    <div class="product-list">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product"
      >
        <img
          :src="product.image"
          :alt="product.name"
        />
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }} ₺</p>

          <!-- Favori ve Sepet Butonları -->
          <div class="button-container">
            <button
              class="favorite-btn"
              @click="addFavorite(product)"
            >
              Favorilere Ekle
            </button>
            <button
              class="cart-btn"
              @click="addToCart(product)"
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Bu örnekte initializeApp, getFirestore, getAuth hepsi bu sayfada
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Firebase yapılandırma (değiştirmeden kullandım)
const firebaseConfig = {
  apiKey: "AIzaSyB4YFG3e1n81PmYHGcVE6cnjaM4Hfzcmvo",
  authDomain: "my-web-project2025.firebaseapp.com",
  projectId: "my-web-project2025",
  storageBucket: "my-web-project2025.firebasestorage.app",
  messagingSenderId: "351407598944",
  appId: "1:351407598944:web:fec994457bc35dcb2a8205",
  measurementId: "G-RENZF83JTP"
}

// Tek bir defa app'i başlat, db ve auth referansı al
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export default {
  name: 'GozMakyaji',
  data() {
    return {
      products: [] // Firestore'dan çekilen ürünler
    }
  },
  async mounted() {
    // Firestore'dan "products" koleksiyonunu çekiyoruz
    try {
      const querySnapshot = await getDocs(collection(db, "products"))
      querySnapshot.forEach((docSnap) => {
        this.products.push({ id: docSnap.id, ...docSnap.data() })
      })
    } catch (error) {
      console.error("Veriler çekilirken hata oluştu:", error)
    }
  },
  methods: {
    addFavorite(product) {
      alert(`${product.name} favorilere eklendi!`)
      // Burada isterseniz "favorites" koleksiyonuna ekleyebilirsiniz.
    },
    async addToCart(product) {
      // 1) Oturum açmış kullanıcı var mı?
      const user = auth.currentUser
      if (!user) {
        alert('Lütfen giriş yapın!')
        return
      }

      // 2) "users/{uid}/cart" alt koleksiyonuna ekle
      try {
        await addDoc(collection(db, 'users', user.uid, 'cart'), {
          name: product.name,
          price: product.price,
          // Sepette "imageUrl" olarak kullanalım:
          imageUrl: product.image,
          quantity: 1
        })
        alert(`${product.name} sepete eklendi!`)
      } catch (err) {
        console.error("Sepete eklenirken hata:", err)
        alert("Ürün sepete eklenemedi.")
      }
    }
  }
}
</script>

<style scoped>
.goz-makyaji {
  font-family: Arial, sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}
.product {
  width: 250px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.product img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.product-info {
  padding: 10px;
}
.product-info h3 {
  font-size: 1.1rem;
  color: #333;
}
.price {
  font-size: 1.2rem;
  color: #e91e63;
  font-weight: bold;
  margin-top: 10px;
}
.button-container {
  margin-top: 10px;
}
.favorite-btn,
.cart-btn {
  background-color: #e91e63;
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
}
.favorite-btn:hover,
.cart-btn:hover {
  background-color: #d81b60;
}
</style>
