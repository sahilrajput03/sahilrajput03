import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // src: https://stackoverflow.com/a/69746868/10012446
  base: 'thoughts-principles-react/dist', // 👈
})
