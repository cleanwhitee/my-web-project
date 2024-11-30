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
export default {
  name: 'GozMakyaji',
  data() {
    return {
      // Ürün bilgileri
      products: [
        { name: "TECHNIC Technic 15'li Far Paleti Unconditional", price: "779.00", image: "/images/image1.png" },
        { name: "Maybelline Lash Sensational Extra Black Maskara", price: "699.50", image: "/images/image2.png" },
        { name: "Loreal Paris Makeup Panorama Hacim Veren Maskara Siyah", price: "929.50", image: "/images/image3.png" },
        { name: "SHOW BY PASTEL Show Your Peace Kaş Kirpik Maskarası", price: "224.50", image: "/images/image4.png" },
        { name: "MAYBELLINE Colossal Kajal Extra Black Göz Kalemi", price: "114.50", image: "/images/image5.png" },
        { name: "MAKE UP ACADEMY 5'li Far Paleti Desert Bloom", price: "439.00", image: "/images/image6.png" },
        { name: "MAYBELLINE Far Nudes Of New York", price: "1,019.50", image: "/images/image7.png" },
        { name: "FLORMAR Midnight Matte Eyeliner - Black", price: "499.50", image: "/images/image8.png" },
        { name: "PASTEL Far Likit Glow No:221", price: "249.50", image: "/images/image9.png" },
        { name: "MAYBELLINE Color Tattoo 24hr Krem Göz Farı", price: "499.50", image: "/images/image10.png" }
      ],
    };
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

.favorite-btn, .cart-btn {
  background-color: #e91e63;
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
}

.favorite-btn:hover, .cart-btn:hover {
  background-color: #d81b60;
}
</style>
