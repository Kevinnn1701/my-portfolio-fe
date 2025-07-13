import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  alias:{
    "@": resolve(__dirname, "./"),
  },  
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/main.css"],
})
