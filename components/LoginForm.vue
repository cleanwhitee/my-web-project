<template>
  <form @submit.prevent="handleLogin">
    <div class="input-group">
      <label for="phone">Telefon Numaranızı Giriniz:</label>
      <input
        type="tel"
        id="phone"
        v-model="phoneNumber"
        placeholder="Lütfen Telefon Numaranızı Giriniz"
        required
      />
    </div>
    <p>
      Eve Mağazacılık’ın telefon numarası doğrulama süreçleri kapsamındaki
      kişisel veri işleme faaliyetleri hakkında
      <a href="#" target="_blank">aydınlatma metni</a> için tıklayınız.
    </p>
    <button type="submit" class="btn">Giriş Yap</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const phoneNumber = ref(""); // Telefon numarası için reaktif değişken

// Giriş yapma işlemini simüle eden fonksiyon
const handleLogin = () => {
  if (phoneNumber.value) {
    alert(`Giriş başarılı! Telefon numaranız: ${phoneNumber.value}`);
  } else {
    alert("Lütfen telefon numaranızı giriniz!");
  }
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column; /* Dikey sıralama */
  justify-content: center; /* Dikeyde ortalama */
  align-items: center; /* Yatayda ortalama */
  min-height: 100vh; /* Sayfanın tamamı yüksekliğinde */
  padding: 20px;
  background-color: #f9f9f9; /* Arka plan rengi */
}

h1 {
  font-size: 40px;
  margin-bottom: 20px; /* Başlık ile diğer öğeler arasında boşluk */
  text-align: center; /* Başlık metnini ortala */
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
  width: 100%;
  max-width: 400px;
  text-align: left;
}

.input-group {
  margin-bottom: 15px;
  width: 100%;
  text-align: center;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: center; /* Etiket metnini ortala */
}

.input-group input {
  width: 250px; /* Input alanını 150px yapıyoruz */
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center; /* Yazıyı ortala */
}

.btn {
  background-color: #d14b88;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 250px; /* Buton genişliğini input ile aynı yapıyoruz */
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  display: block; /* Butonu bir blok elementi gibi yaparak ortalayacağız */
  margin-left: auto;
  margin-right: auto; /* Yatayda ortalamak için */
}

.btn:hover {
  background-color: #b43e70;
}

p {
  text-align: center; /* Aydınlatma metnini ortala */
}


</style>
