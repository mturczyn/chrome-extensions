import { defineConfig } from "vite";
import webExtension from "vite-plugin-web-extension";
import { format, resolve } from "path";

export default defineConfig({
  plugins: [
    webExtension({
      additionalInputs: [
        "src/xhrInterceptor.ts"
      ], 
    }),
  ],
});