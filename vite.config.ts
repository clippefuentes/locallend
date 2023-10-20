import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env  = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
  return defineConfig({
    plugins: [vue()],
    server: {
      proxy: {
        "/api": "http://localhost:3000",
      },
    },
  });
};
