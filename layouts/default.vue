<template>
    <div>
      <!-- Sabit Header (Global Header) -->
      <Header />
  
      <!-- Sol Menü Sidebar -->
      <Menu />
  
      <!-- Ana İçerik Alanı -->
      <div class="main-content">
        <nuxt />
      </div>
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header.vue';  // Header bileşenini import ediyoruz
  import Menu from '@/components/Menu.vue';
  
  export default {
    components: {
      Header,
      Menu,
    },
  };
  </script>
  
  <style scoped>
  /* Ana İçeriğin Layout Düzenlemesi */
  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* Header'ın Sticky olması için */
  header {
    position: sticky;
    top: 0; /* Ekranın üst kısmına sabitlenir */
    z-index: 1000; /* Header'ı diğer içeriklerin üstünde tutar */
    background-color: white;
  }
  
  /* Main Content alanının, sidebar ile uyumlu olması için */
  .main-content {
    margin-left: 250px; /* Sidebar genişliği kadar bir boşluk bırak */
    padding: 20px;
  }
  </style>
  