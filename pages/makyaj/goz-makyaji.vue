<template>
  <div class="goz-makyaji">
    <!-- Ürün Listesi -->
    <div class="product-list" v-if="products.length">
      <div v-for="(product, index) in products" :key="index" class="product">
        <img :src="product.image" :alt="product.name" />
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }} ₺</p>
          <!-- Favori ve Sepet Butonları -->
          <div class="button-container">
            <button class="favorite-btn" @click="addFavorite(product)">
              Favorilere Ekle
            </button>
            <button class="cart-btn" @click="addToCart(product)">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Yükleniyor Mesajı -->
    <div v-else>
      <p>Ürünler yükleniyor...</p>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useNuxtApp } from "#app";

export default {
  name: "GozMakyaji",
  data() {
    return {
      products: [] // Ürünler burada saklanacak
    };
  },
  methods: {
    // Firestore'dan ürünleri çekme
    async fetchProducts() {
      try {
        const { $firebaseDB } = useNuxtApp(); // Firestore bağlantısını al
        const db = $firebaseDB;
        const productsCollection = collection(db, "products"); // 'products' koleksiyonuna bağlan
        const querySnapshot = await getDocs(productsCollection);

        // Verileri products dizisine ekle
        this.products = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id // Her ürünün ID'sini de ekliyoruz
        }));

        console.log("Firestore'dan alınan ürünler:", this.products); // Kontrol için log
      } catch (error) {
        console.error("Firebase'den veri çekilirken bir hata oluştu:", error); // Hata varsa logla
      }
    },
    // Favorilere ürün ekleme
    addFavorite(product) {
      alert(`${product.name} favorilere eklendi!`);
    },
    // Sepete ürün ekleme
    addToCart(product) {
      alert(`${product.name} sepete eklendi!`);
    }
  },
  mounted() {
    this.fetchProducts(); // Bileşen yüklendiğinde ürünleri al
  }
};
</script>

<style scoped>
/* Genel stil */
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
