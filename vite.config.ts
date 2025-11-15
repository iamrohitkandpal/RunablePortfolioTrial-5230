import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import visualEditorPlugin from "@runablehq/vite-editor-plugin"

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualEditorPlugin(), tailwindcss(), cloudflare()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', 'motion'],
          'form-vendor': ['react-hook-form', 'zod'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Minify for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
    // Allow all inbound hostnames (e.g., tunneled domains like *.e2b.app)
    allowedHosts: true,
  },
  preview: {
    // Apply the same host allowance for `vite preview`
    allowedHosts: true,
  },
});
