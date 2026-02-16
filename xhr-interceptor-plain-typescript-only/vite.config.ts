import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // popup: resolve(__dirname, "index.html"),
        background: resolve(__dirname, "src/background.ts"),
        injected: resolve(__dirname, "src/injected.ts"),
        content: resolve(__dirname, "src/content.ts")
      },
      output: {
        entryFileNames: "[name].js"
      }
    }
  }
});
