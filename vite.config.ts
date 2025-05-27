
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", 
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
      ignored: ['**/node_modules/**', '**/dist/**']
    },
    fs: {
      strict: false,
    },
    hmr: {
      overlay: true,
      port: 24678,
    },
  },
  plugins: [
    react({
      // Enable fast refresh for better development experience
      include: "**/*.{jsx,tsx}",
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
    include: ['react', 'react-dom'],
  },
  // Enable source maps for better debugging
  build: {
    sourcemap: mode === 'development',
  },
}));
