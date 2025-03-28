import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@features": "/src/features",
      "@config": "/src/config",
      "@layouts": "/src/layouts",
    },
  },
});
