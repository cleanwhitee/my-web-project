<template>
    <Tabs>
      <template #default>
        <h2>En Yeniler</h2>
        <p>Burada yeni gelen ürünler listelenecek...</p>
      </template>
    </Tabs>
  </template>
  
  <script>
  import Tabs from '@/components/Tabs.vue';
  
  export default {
    name: "EnYeniler",
    components: {
      Tabs,
    }
  };
  </script>