import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcssVite from '@tailwindcss/vite'; // Import Tailwind CSS Vite plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcssVite()],
});
