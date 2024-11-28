<template>
    <div class="page">
      <h1>Hoş Geldiniz!</h1>
      <p>Bu bir örnek sayfadır.</p>

 
    <!-- Carousel Bileşeni -->
    <Carousel  />

    <!-- ScrollableRectangle bileşeni -->
    <ScrollableRectangle :items="rectangleItems" />

</div>
</template>

<script setup>
import Carousel from '~/components/Carousel.vue';
import ScrollableRectangle from '~/components/ScrollableRectangle.vue';

const rectangleItems = [
  {
    imgSrc: "/images/maskara.jpg",  // Resim yolu
  },
  {
    imgSrc: "/images/fondöten.jpg",  // Resim yolu
  },
  {
    imgSrc: "/images/maskara.jpg",  // Resim yolu
  },
  {
    imgSrc: "/images/fondöten.jpg",  // Resim yolu
  },
  {
    imgSrc: "/images/maskara.jpg",  // Resim yolu
  },
  {
    imgSrc: "/images/fondöten.jpg",  // Resim yolu
  },
  {
    imgSrc: "/images/maskara.jpg",  // Resim yolu
  },
  {
    imgSrc: "/images/fondöten.jpg",  // Resim yolu
  },
  {
    imgSrc: "/images/maskara.jpg",  // Resim yolu
  },
  {
    imgSrc: "/images/fondöten.jpg",  // Resim yolu
  }
  // Diğer öğeleri buraya ekleyebilirsiniz...
];


</script>
<style scoped>
.page {
  text-align: center;
}

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 10px;
}

.main-content {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 40px;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.tab {
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 30px;
}

.tab.active {
  font-weight: bold;
  color: #d14b88; /* Aktif sekme için renk */
  border-bottom: 2px solid #d14b88; /* Alt çizgi */
}

.tab-content {
  margin-top: 20px;
}

.tab-content h2 {
  font-size: 40px;
}

</style>
