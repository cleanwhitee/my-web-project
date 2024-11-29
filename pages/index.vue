<template>
  <div class="page">
    <h1>Hoş Geldiniz!</h1>
    <p>Bu bir örnek sayfadır.</p>
 
     <!-- Sekmeler -->
     <div class="tabs">
      <span
        @click="activeTab = 'populer'"
        :class="{ active: activeTab === 'populer' }"
        class="tab"
      >
        En Popüler
      </span>
      <span
        @click="activeTab = 'yeniler'"
        :class="{ active: activeTab === 'yeniler' }"
        class="tab"
      >
        En Yeniler
      </span>
      <span
        @click="activeTab = 'coksatanlar'"
        :class="{ active: activeTab === 'coksatanlar' }"
        class="tab"
      >
        En Çok Satanlar
      </span>
    </div>

    <!-- İçerikler -->
    <div v-if="activeTab === 'populer'" class="tab-content">
      <h2>En Popüler Ürünler</h2>
      <p>Burada en popüler ürünler listelenecek...</p>
      <!-- Popüler ürünler içeriği -->
    </div>
    <div v-if="activeTab === 'yeniler'" class="tab-content">
      <h2>En Yeniler</h2>
      <p>Burada yeni gelen ürünler listelenecek...</p>
      <!-- Yeniler içeriği -->
    </div>
    <div v-if="activeTab === 'coksatanlar'" class="tab-content">
      <h2>En Çok Satanlar</h2>
      <p>Burada en çok satan ürünler listelenecek...</p>
      <!-- En çok satanlar içeriği -->
    </div>

    <!-- ScrollableRectangle bileşeni -->
    <ScrollableRectangle :items="rectangleItems" />

    <!-- ProductSlider bileşeni -->
    <ProductSlider :items="sliderItems" />
 
    <!-- Carousel Bileşeni -->
    <Carousel  />

    <Chatbox />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ScrollableRectangle from '~/components/ScrollableRectangle.vue';
import ProductSlider from '~/components/ProductSlider.vue';
import Carousel from '~/components/Carousel.vue';
import Chatbox from '~/components/ChatBox.vue';

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


const sliderItems = [
  {
    imgSrc: "/images/slider1.png",  // Slider resim yolu
  
  },
  {
    imgSrc: "/images/slider2.png",  // Slider resim yolu

  },
  {
    imgSrc: "/images/slider3.png",  // Slider resim yolu
   
  },
  {
    imgSrc: "/images/slider4.png",  // Slider resim yolu
   
  },
  {
    imgSrc: "/images/slider5.png",  // Slider resim yolu
   
  }
];

// Sekme yönetimi
const activeTab = ref('populer'); // Varsayılan olarak 'En Popüler' sekmesi aktif
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