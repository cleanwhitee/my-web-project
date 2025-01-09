<template>
    <div>
      <!-- Sidebar -->
      <div v-if="isSidebarOpen" class="sidebar" @click.stop>
        <div class="sidebar-content">
          <ul>
            <li>
              <nuxt-link to="/giris-yap" @click="closeSidebar">Giriş Yap</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/uye-ol" @click="closeSidebar">Üye Ol</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/siparis-takip" @click="closeSidebar">Sipariş Takip</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/magazalarimiz" @click="closeSidebar">Mağazalarımız</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/katalog" @click="closeSidebar">Katalog</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/cikis-yap" @click="closeSidebar">Çıkış Yap</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
  
      
  
      <!-- Sidebar dışında bir alana tıklanması durumunda kapanması için boş bir alan -->
      <div v-if="isSidebarOpen" class="overlay" @click="closeSidebar"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Menu',
    data() {
      return {
        isSidebarOpen: false, // Sidebar'ın açılma/kapama durumu
      };
    },
    methods: {
      // Sidebar'ı açma/kapama
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
      // Sidebar'ı kapatma
      closeSidebar() {
        this.isSidebarOpen = false;
      },
      // Çıkış Yapma işlemi
      logout() {
        // Burada logout işlemi yapılabilir (örneğin, token silme)
        this.$router.push('/giris-yap');
        this.closeSidebar(); // Logout sonrası sidebar'ı kapatma
      },
    },
  };
  </script>
  
  <style scoped>
  /* Sidebar */
  .sidebar {
    width: 250px;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding-top: 20px;
  }
  
  .sidebar-content ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar-content li {
    margin: 20px 0;
  }
  
  .sidebar-content li a,
  .sidebar-content li button {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    padding: 10px 20px;
    display: block;
    border: none;
    background: none;
    cursor: pointer;
  }
  
  .sidebar-content li a:hover,
  .sidebar-content li button:hover {
    background-color: #f1f1f1;
    color: #ff4081;
  }
  
  /* Sidebar Dışındaki Boş Alan (Overlay) */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  </style>
  