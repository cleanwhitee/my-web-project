<template>
    <div class="snow-container">
      <div
        v-for="n in snowflakes"
        :key="n.id"
        class="snowflake"
        :style="{
          left: `${n.x}px`,
          top: `${n.y}px`,
          width: `${n.size}px`,
          height: `${n.size}px`,
          animationDuration: `${n.speed}s`,
          filter: `blur(${n.blur}px)`,
          background: `rgba(173, 216, 230, ${n.opacity})`, // Mavi tonlarında kar taneleri
          clipPath: n.shape, // Kar kristali şekli
          transform: `rotate(${n.rotation}deg)`
        }"
      ></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const snowflakes = ref([]);
  
  const createSnowflake = () => {
    return {
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -Math.random() * 100,
      size: Math.random() * 15 + 8, // Kar tanelerinin büyüklüğünü artırdık
      speed: Math.random() * 5 + 3,
      opacity: Math.random() * 0.5 + 0.5, // Şeffaflık ekledik
      blur: Math.random() * 2 + 1, // Bulanıklık efekti ekledik
      rotation: Math.random() * 360, // Kar tanesini rastgele döndürüyoruz
      shape: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' // Altıgen kar kristali şekli
    };
  };
  
  onMounted(() => {
    // Kar tanelerini oluştur
    for (let i = 0; i < 100; i++) {
      snowflakes.value.push(createSnowflake());
    }
  
    // Kar tanelerinin hareketini güncelle
    setInterval(() => {
      snowflakes.value = snowflakes.value.map(snowflake => ({
        ...snowflake,
        y: snowflake.y + snowflake.speed
      }));
  
      // Kar tanesi alt kısma ulaştığında yeniden başlat
      snowflakes.value.forEach(snowflake => {
        if (snowflake.y > window.innerHeight) {
          snowflake.y = -Math.random() * 100;
          snowflake.x = Math.random() * window.innerWidth;
        }
      });
    }, 50);
  });
  </script>
  
  <style scoped>
  .snow-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  }
  
  .snowflake {
    position: absolute;
    opacity: 0.9; /* Kar tanelerinin opaklığını artırdık */
    animation: snowfall 10s linear infinite;
    pointer-events: none;
    transform-origin: center;
  }
  
  @keyframes snowfall {
    0% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(100vh);
    }
  }
  </style>
  