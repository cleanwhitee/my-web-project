<template>
    <div>
      <!-- Sepet Sidebar -->
      <div v-if="isSidebarOpen" class="sidebar" @click.stop>
        <div class="sidebar-content">
          <h2>Sepetiniz Şu An Boş.</h2>
          <div v-for="(item, index) in categories" :key="index" class="category-item">
            <button class="category-button">{{ item }}</button>
          </div>
        </div>
      </div>
  
      <!-- Sidebar dışında bir alana tıklanması durumunda kapanması için overlay -->
      <div v-if="isSidebarOpen" class="overlay" @click="closeSidebar"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSidebarOpen: false,  // Sidebar'ın açık olup olmadığı durumu
        categories: [
          "Makyaj",
          "Cilt Bakım",
          "Saç Bakım",
          "Parfüm & Deodorant",
          "Kişisel Bakım",
          "Erkek Bakım",
          "Anne & Bebek",
          "Ev & Yaşam",
          "Kampanyalar",
        ],
      };
    },
    methods: {
      // Sidebar'ı açma ve kapama
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
      // Sidebar'ı kapatma
      closeSidebar() {
        this.isSidebarOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Sepet Sidebar */
  .sidebar {
    width: 250px;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    background-color: #fff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding-top: 20px;
    transition: transform 0.3s ease-in-out;
  }
  
  .sidebar-content {
    padding: 20px;
  }
  
  .sidebar-content h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .category-item {
    margin-bottom: 15px;
  }
  
  .category-button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    width: 250px;
    text-align: left;
    display: block;
    margin: 0 auto;
  }
  
  .category-button:hover {
    background-color: #f2f2f2;
    border-color: #d14b88;
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
  