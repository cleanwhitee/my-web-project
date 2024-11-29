<template>
  <div>
    <h1>Giriş Yap</h1>
    <!-- Giriş yapma formu buraya gelecek -->
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue';

export default {
  name: 'GirisYap'
};
</script>

<style scoped>
h1 {
  font-size: 40px;
  text-align: center; /* Yatayda ortalama */
  margin-bottom: 20px; /* Başlık ile form arasında boşluk */
}
</style>
