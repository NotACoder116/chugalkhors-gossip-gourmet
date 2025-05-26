
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", 
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: true,
      interval: 100
    }
  },
  plugins: [
    react({
      // Enable fast refresh
      fastRefresh: true,
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure proper file extensions are resolved
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    sourcemap: true
  }
}));
