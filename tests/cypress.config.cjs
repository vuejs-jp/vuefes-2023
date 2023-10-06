import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
    },
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1400,
    viewportHeight: 800,
    defaultCommandTimeout: 12000,
    video: true,
  },
})
