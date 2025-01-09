<template>
  <div class="goz-makyaji">
    <!-- Ürün Listesi -->
    <div class="product-list">
      <div v-for="(product, index) in products" :key="index" class="product">
        <img :src="product.image" :alt="product.name" />
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }} ₺</p>
          <!-- Favori ve Sepet Butonları -->
          <div class="button-container">
            <button class="favorite-btn" @click="addFavorite(product)">Favorilere Ekle</button>
            <button class="cart-btn" @click="addToCart(product)">Sepete Ekle</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase yapılandırma bilgileri (Firebase Console'dan al)
const firebaseConfig = {
  apiKey: "AIzaSyB4YFG3e1n81PmYHGcVE6cnjaM4Hfzcmvo",
  authDomain: "my-web-project2025.firebaseapp.com",
  projectId: "my-web-project2025",
  storageBucket: "my-web-project2025.firebasestorage.app",
  messagingSenderId: "351407598944",
  appId: "1:351407598944:web:fec994457bc35dcb2a8205",
  measurementId: "G-RENZF83JTP"
};

// Firebase'i başlat ve Firestore bağla
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
  name: "GozMakyaji",
  data() {
    return {
      products: [] // Firestore'dan çekilen ürünler burada tutulacak
    };
  },
  async mounted() {
    try {
      // Firestore'dan ürünleri çekme
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        this.products.push({ id: doc.id, ...doc.data() });
      });
    } catch (error) {
      console.error("Veriler çekilirken hata oluştu:", error);
    }
  },
  methods: {
    addFavorite(product) {
      alert(`${product.name} favorilere eklendi!`);
    },
    addToCart(product) {
      alert(`${product.name} sepete eklendi!`);
    }
  }
};
</script>

<style scoped>
/* Basit stil */
.goz-makyaji {
  font-family: Arial, sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.goz-makyaji h1 {
  font-size: 2rem;
  color: #333;
}

.goz-makyaji p {
  font-size: 1.1rem;
  color: #777;
}

.goz-makyaji ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

.goz-makyaji ul li {
  font-size: 1.2rem;
  color: #555;
}

/* Ürün Listesi */
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

/* Butonlar için stil */
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
