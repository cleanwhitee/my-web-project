
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  plugins: ["~/plugins/firebase"],
  devtools: { enabled: true },

  // Font Awesome CSS ekleme
  css: [
    '@fortawesome/fontawesome-free/css/all.css'  // Font Awesome'ı dahil ediyoruz
  ],
  
})



