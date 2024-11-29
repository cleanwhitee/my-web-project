<template>
    <div class="goz-makyaji">
      <h1>Göz Makyajı Ürünleri</h1>
      <p>Burada göz makyajı ile ilgili ürünleri bulabilirsiniz.</p>
      <ul>
        <li>Göz Farı</li>
        <li>Maskara</li>
        <li>Göz Kalemi</li>
        <li>Göz Aydınlatıcı</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GozMakyaji',
  };
  </script>
  
  <style scoped>
  /* Basit stil */
  .goz-makyaji {
    font-family: Arial, sans-serif;
    padding: 20px;
  
    /* Yalnızca yatayda ortalamak için flexbox kullan */
    display: flex;
    flex-direction: column;
    align-items: center; /* Yalnızca yatayda ortalar */
  }
  
  .goz-makyaji h1 {
    font-size: 2rem;
    color: #333;
  }
  
  .goz-makyaji p {
    font-size: 1.1rem;
    color: #777;
  }
  
  .goz-makyaji ul {
    list-style-type: none;
    padding: 0;
    text-align: center; /* Listeyi yatayda ortalar */
  }
  
  .goz-makyaji ul li {
    font-size: 1.2rem;
    color: #555;
  }
  </style>
  