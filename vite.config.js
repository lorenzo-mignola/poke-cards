/* eslint-disable import/no-extraneous-dependencies */
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
});
