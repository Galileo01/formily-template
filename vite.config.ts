import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import LessTildeImport from "vite-plugin-less-tilde-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        plugins: [new LessTildeImport()],
        javascriptEnabled: true,
      },
    },
  },
});
