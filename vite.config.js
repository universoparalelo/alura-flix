import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Para el servidor de desarrollo
  },
  build: {
    outDir: 'dist',
  },
});
