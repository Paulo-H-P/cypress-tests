const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Altere para a URL da sua aplicação
    supportFile: "cypress/support/e2e.js", // Certifique-se de que este caminho está correto
  },
});
