import { defineConfig } from "vite";
import eslint from "../..";

export default defineConfig({
  plugins: [
    eslint({
      formatter: console.log,
    }),
  ],
  server: { warmup: { clientFiles: ["src/main.js"] } },
});
