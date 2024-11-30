<template>
    <Tabs>
      <template #default>
        <h2>En Çok Satanlar</h2>
        <p>Burada en çok satan ürünler listelenecek...</p>
      </template>
    </Tabs>
  </template>
  
  <script>
  import Tabs from '@/components/Tabs.vue';
  
  export default {
    name: "EnCokSatanlar",
    components: {
      Tabs,
    }
  };
  </script>