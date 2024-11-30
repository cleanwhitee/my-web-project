<template>
  <div class="form-container">
    <div class="form-header">
      <button :class="{ active: currentTab === 'login' }" @click="currentTab = 'login'">Giriş Yap</button>
      <button :class="{ active: currentTab === 'register' }" @click="currentTab = 'register'">Üye Ol</button>
    </div>

    <!-- Giriş Yap Formu -->
    <div v-if="currentTab === 'login'">
      <h1>Giriş Yap</h1>
      <LoginForm />
    </div>

    <!-- Üye Ol Formu -->
    <form v-if="currentTab === 'register'" @submit.prevent="submitForm">
      <h1>Üye Ol</h1>
      <div class="form-group">
        <input type="text" v-model="form.firstName" placeholder="Adınız" required />
      </div>
      <div class="form-group">
        <input type="text" v-model="form.lastName" placeholder="Soyadınız" required />
      </div>
      <div class="form-group">
        <input type="email" v-model="form.email" placeholder="Email Adresiniz" required />
      </div>
      <div class="form-group">
        <input type="tel" v-model="form.phone" placeholder="Telefonunuz" required />
      </div>
      <div class="form-group checkbox">
        <label>
          <input type="checkbox" v-model="form.agreements.terms" required />
          Eve Sadakat Programı Üyelik Sözleşmesi ve Açık Rıza Metni’ni okudum, kabul ediyorum.
        </label>
      </div>
      <div class="form-group checkbox">
        <label>
          <input type="checkbox" v-model="form.agreements.electronicMessages" />
          Eve Mağazacılık'ın onay metni kapsamında ticari elektronik ileti göndermesini kabul ediyorum.
        </label>
      </div>
      <div class="form-group checkbox">
        <label>
          <input type="checkbox" v-model="form.agreements.tomCompaniesMessages" />
          TOM Şirketlerinin tarafıma ticari elektronik ileti göndermesini kabul ediyorum.
        </label>
      </div>
      <div class="form-group checkbox">
        <label>
          <input type="checkbox" v-model="form.agreements.dataProcessing" />
          Eve Mağazacılık nezdindeki kişisel verilerimin Açık Rıza Metni kapsamında TOM Şirketlerine aktarılmasına ve işlenmesine onay veriyorum.
        </label>
      </div>
      <button type="submit" :disabled="!isFormValid">Kaydol</button>
    </form>
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      currentTab: 'register', // Varsayılan olarak 'register' sekmesi açık
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        agreements: {
          terms: false,
          electronicMessages: false,
          tomCompaniesMessages: false,
          dataProcessing: false,
        },
      },
    };
  },
  computed: {
    isFormValid() {
      return this.form.firstName && this.form.lastName && this.form.email && this.form.phone && this.form.agreements.terms;
    },
  },
  methods: {
    submitForm() {
      console.log("Form Submitted:", this.form);
      alert("Form başarıyla gönderildi!");
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
}
.form-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.form-header button {
  flex: 1;
  padding: 10px;
  border: none;
  background: #f7f7f7;
  cursor: pointer;
}
.form-header button.active {
  font-weight: bold;
  background: #ddd;
}
.form-group {
  margin-bottom: 15px;
}
.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-group.checkbox label {
  display: flex;
  align-items: center;
}
.form-group.checkbox input {
  margin-right: 10px;
}
button[type="submit"] {
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="submit"]:disabled {
  background: #ccc;
  cursor: not-allowed;
}
h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
