import { defineConfig } from 'cypress'
import allureWriter from '@shelex/cypress-allure-plugin/writer.js'
import 'dotenv/config'

export default defineConfig({
	watchForFileChanges: false,
	chromeWebSecurity: false,
	downloadsFolder: 'cypress/downloads',
	retries: process.env.CI ? 2 : 0,
	video: Boolean(process.env.CI),
	videosFolder: 'cypress/videos',
	//* supportFile: "cypress/support/index.js",
	screenshotOnRunFailure: true,
	screenshotsFolder: 'cypress/screenshots',
	scrollBehavior: 'center',
	reporter: 'cypress-multi-reporters',
	reporterOptions: {
		configFile: 'reporter-config.json',
	},
	e2e: {
		baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
		specPattern: ['**/*.test.cy.js', '**/*.api.cy.js'],
		experimentalRunAllSpecs: true,

		setupNodeEvents(on, config) {
			// implement node event listeners here
			allureWriter(on, config)
			return config
		},

		env: {
			loginCredentials: {
				username: process.env.USERNAME,
				password: process.env.PASSWORD,
			},
			allure: true,
			allureReuseAfterSpec: true,
			allureResultsPath: 'tests_results/allure-results',
		},
	},
})
