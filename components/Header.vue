<template>
  <header class="header">
    <div class="header-top">
      <!-- Logo -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="/logo.png" alt="Logo" />
        </nuxt-link>
      </div>

      <!-- Arama Çubuğu -->
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Ürün, marka, kategori ara..."
        />
        <button @click="search">
          <i class="fas fa-search"></i>
        </button>
      </div>

      <!-- İkonlar -->
      <div class="icons">
        <!-- Favoriler -->
        <button>
          <i class="fas fa-heart"></i>
        </button>
        <!-- Sepet -->
        <button @click="toggleCart">
          <i class="fas fa-shopping-bag"></i>
        </button>
        <!-- Sidebar Açma Butonu -->
        <button @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <div class="header-bottom">
      <ul>
        <li><nuxt-link to="/category/makyaj">Makyaj</nuxt-link></li>
        <li><nuxt-link to="/category/cilt-bakim">Cilt Bakım</nuxt-link></li>
        <li><nuxt-link to="/category/sac-bakim">Saç Bakım</nuxt-link></li>
        <li><nuxt-link to="/category/parfum">Parfüm & Deodorant</nuxt-link></li>
        <li><nuxt-link to="/category/kisisel-bakim">Kişisel Bakım</nuxt-link></li>
        <li><nuxt-link to="/category/erkek-bakim">Erkek Bakım</nuxt-link></li>
        <li><nuxt-link to="/category/anne-bebek">Anne & Bebek</nuxt-link></li>
        <li><nuxt-link to="/category/ev-yasam">Ev & Yaşam</nuxt-link></li>
        <li><nuxt-link to="/category/kampanyalar">Kampanyalar</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link to="/category/markalar">Markalar</nuxt-link></li>
      </ul>
    </div>
  </header>

  <!-- Sepet Component -->
  <Sepet ref="sepet" />
  <Menu ref="menu" />
</template>

<script>
import Sepet from '@/components/Sepet.vue';
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Sepet,
    Menu
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    search() {
      console.log('Searching for:', this.searchQuery);
    },
    toggleSidebar() {
      this.$refs.sepet.toggleSidebar(); // Sepeti toggle etmek için
    },
    toggleSidebar() {
      this.$refs.menu.toggleSidebar(); // Sepeti toggle etmek için
    },
    toggleCart() {
      this.$refs.sepet.toggleSidebar(); // Sepet component'ini açıp kapatmak için
    }
  },
};
</script>

<style scoped>
/* Header Stil Düzenlemeleri */
.header {
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Header Üst Kısım */
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.logo img {
  width: 120px;
  height: auto;
  margin-right: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.search-bar input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px 0 0 20px;
  outline: none;
}

.search-bar button {
  padding: 8px 12px;
  background-color: #ff4081;
  border: none;
  border-radius: 0 20px 20px 0;
  color: white;
  cursor: pointer;
}

.icons button {
  background: none;
  border: none;
  margin-left: 15px;
  font-size: 18px;
  cursor: pointer;
}

/* Alt Menü (Kategori Menüsü) */
.header-bottom {
  background-color: #f8f8f8;
  padding: 10px 20px;
}

.header-bottom ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}

.header-bottom li a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: color 0.3s ease;
}

.header-bottom li a:hover {
  color: #ff4081;
}
</style>
