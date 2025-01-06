import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
      app: resolve(__dirname, "./src/app"),
      layouts: resolve(__dirname, "./src/layouts"),
      pages: resolve(__dirname, "./src/pages"),
      components: resolve(__dirname, "./src/components"),
      constants: resolve(__dirname, "./src/constants"),
      elements: resolve(__dirname, "./src/elements"),
      assets: resolve(__dirname, "./src/assets"),
      hooks: resolve(__dirname, "./src/hooks"),
      types: resolve(__dirname, "./src/types"),
      utils: resolve(__dirname, "./src/utils"),
      routes: resolve(__dirname, "./src/routes"),
    },
  },
});
