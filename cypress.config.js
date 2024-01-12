import { defineConfig } from "cypress";
import 'dotenv/config'

export default defineConfig({

  chromeWebSecurity: false,
  downloadsFolder: "cypress/downloads",
  //* supportFile: "cypress/support/index.js",
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  scrollBehavior: 'center',
  reporter: 'nyan',

  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    specPattern: ["**/*.test.cy.js","**/*.api.cy.js"],
    experimentalRunAllSpecs: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      loginCredentials: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      }
    }
  },
});
