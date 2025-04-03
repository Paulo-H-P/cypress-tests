const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress-do-zero-a-nuvem/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress-do-zero-a-nuvem/cypress/support/e2e.js",
  },
});
