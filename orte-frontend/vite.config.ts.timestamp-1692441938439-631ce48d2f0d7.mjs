// vite.config.ts
import { defineConfig } from "file:///D:/Github/orte-testcase/orte-frontend/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///D:/Github/orte-testcase/orte-frontend/node_modules/vite-plugin-pwa/dist/index.js";
import react from "file:///D:/Github/orte-testcase/orte-frontend/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate"
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(".", "src") }]
  },
  server: {
    port: 3e3
  },
  build: {
    manifest: true,
    terserOptions: {
      compress: {
        unused: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ["lodash"]
        },
        chunkFileNames: `chunks/[hash]_${Date.now()}.js`,
        entryFileNames: "chunks/[name].js",
        assetFileNames: `assets/[hash]_${Date.now()}.[ext]`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRodWJcXFxcb3J0ZS10ZXN0Y2FzZVxcXFxvcnRlLWZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxHaXRodWJcXFxcb3J0ZS10ZXN0Y2FzZVxcXFxvcnRlLWZyb250ZW5kXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9HaXRodWIvb3J0ZS10ZXN0Y2FzZS9vcnRlLWZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6IFwiYXV0b1VwZGF0ZVwiLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFt7IGZpbmQ6IFwiQFwiLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKFwiLlwiLCBcInNyY1wiKSB9XSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBtYW5pZmVzdDogdHJ1ZSxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICB1bnVzZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIGxvZGFzaDogW1wibG9kYXNoXCJdLFxuICAgICAgICB9LFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogYGNodW5rcy9baGFzaF1fJHtEYXRlLm5vdygpfS5qc2AsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImNodW5rcy9bbmFtZV0uanNcIixcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IGBhc3NldHMvW2hhc2hdXyR7RGF0ZS5ub3coKX0uW2V4dF1gLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlTLFNBQVMsb0JBQW9CO0FBQ3RVLFNBQVMsZUFBZTtBQUN4QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRWpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxJQUNoQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWEsS0FBSyxRQUFRLEtBQUssS0FBSyxFQUFFLENBQUM7QUFBQSxFQUM5RDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFVBQVU7QUFBQSxJQUNWLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osUUFBUSxDQUFDLFFBQVE7QUFBQSxRQUNuQjtBQUFBLFFBQ0EsZ0JBQWdCLGlCQUFpQixLQUFLLElBQUksQ0FBQztBQUFBLFFBQzNDLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQixpQkFBaUIsS0FBSyxJQUFJLENBQUM7QUFBQSxNQUM3QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
