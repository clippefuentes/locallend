import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env  = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        "/api": "http://localhost:3000",
      },
    },
  });
};
