import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://stackoverflow.com/a/70314031
import svgr from 'vite-plugin-svgr' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({ 
      svgrOptions: {
        // svgr options
      },
    }),
  ],
})
