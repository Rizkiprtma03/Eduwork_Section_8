// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
const { defineConfig } = require('cypress')

// Populate process.env with values from .env file
// require('dotenv').config()

module.exports = defineConfig({
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
        log: true
        on('task', {
          log(message){
            console.log(message)
            return null
          },
        })
      },
    },
    env: {
      apiUrl: "https://admin:admin@the-internet.herokuapp.com/"
    }
})