import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue'; // Add this if you're using Vue

export default defineConfig({
  plugins: [
    vue(), // Add this if you're using Vue
    tailwindcss(),
  ],
});