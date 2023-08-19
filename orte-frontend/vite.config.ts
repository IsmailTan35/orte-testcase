import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(".", "src") }],
  },
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
    port: 3000,
  },
  build: {
    manifest: true,
    terserOptions: {
      compress: {
        unused: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ["lodash"],
        },
        chunkFileNames: `chunks/[hash]_${Date.now()}.js`,
        entryFileNames: "chunks/[name].js",
        assetFileNames: `assets/[hash]_${Date.now()}.[ext]`,
      },
    },
  },
});
