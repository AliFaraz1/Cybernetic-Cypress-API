const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    pageLoadTimeout: 90000,
    viewportWidth: 1500,
    viewportHeight: 1500,
    defaultCommandTimeout: 15000,
    requestTimeout: 20000,
    responseTimeout: 15000,
    numTestsKeptInMemory: 5,
    experimentalMemoryManagement: true,
    baseUrl: "https://reqres.in", 
    specPattern: "cypress/e2e/features/**/*.feature", 
    stepDefinitions: "cypress/e2e/stepdef/*.js", 
  },
});
