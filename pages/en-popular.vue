<template>
    <Tabs>
      <template #default>
        <h2>En Popüler Ürünler</h2>
        <p>Burada en popüler ürünler listelenecek...</p>
      </template>
    </Tabs>
  </template>
  
  <script>
  import Tabs from '@/components/Tabs.vue';
  
  export default {
    name: "EnPopuler",
    components: {
      Tabs,
    }
  };
  </script>