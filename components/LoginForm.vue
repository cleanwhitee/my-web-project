<template>
  <div class="login-form">
    <h1>Giriş Yap</h1>

    <div class="form-group">
      <input
        type="email"
        v-model="email"
        placeholder="E-posta Adresiniz"
        required
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        v-model="password"
        placeholder="Şifre"
        required
      />
    </div>

    <button @click="handleLogin">Giriş Yap</button>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { useNuxtApp } from "#app";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      this.errorMessage = "";
      if (!this.email || !this.password) {
        this.errorMessage = "Lütfen e-posta ve şifreyi giriniz.";
        return;
      }

      try {
        // Nuxt plugin üzerinden auth nesnesini alıyoruz.
        const { $firebaseAuth } = useNuxtApp();

        // Firebase ile e-posta/şifre giriş
        const userCredential = await signInWithEmailAndPassword(
          $firebaseAuth,
          this.email,
          this.password
        );

        // Başarılı giriş -> userCredential.user
        alert("Giriş başarılı! Hoş geldin: " + userCredential.user.email);

        // İstersen parent bileşene bir event fırlatabilirsin
        // this.$emit('logged-in', userCredential.user);
      } catch (err) {
        this.errorMessage = err.message;
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
}
.form-group {
  margin-bottom: 10px;
}
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
