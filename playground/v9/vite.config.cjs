const { defineConfig } = require("vite");
const eslint = require("../..");

module.exports = defineConfig({
  plugins: [eslint()],
  server: { warmup: { clientFiles: ["src/main.js"] } },
});
