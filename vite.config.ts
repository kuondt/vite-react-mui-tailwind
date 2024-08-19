import react from "@vitejs/plugin-react-swc";
import path from "path";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
// https://vitejs.dev/guide/backend-integration.html
export default defineConfig({  
  base: '/',
  plugins: [react()],
  server: {
    port: 8888,
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env": process.env,
  },
  build: {
    // generate manifest.json in outDir
    manifest: true,
    // rollupOptions: {
    //   // overwrite default .html entry (default is './index.html')
    //   input: '/src/main.tsx',
    // },
  },

});
