module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Ou a URL da sua aplicação
    supportFile: "cypress/support/e2e.js", // Caminho correto do supportFile
  },
});
