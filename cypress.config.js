const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    "reporter": "mochawesome",
    "reporterOptions": {
       "reportDir": "cypress/reports",
       "overwrite": true,
       "html": true,
       "json": false
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

    
});
