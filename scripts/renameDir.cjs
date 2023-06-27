const fs = require('fs-extra')
const { resolve } = require('path')

fs.moveSync(resolve(__dirname, '../dist/'), resolve(__dirname, '../tmp/'))

fs.moveSync(resolve(__dirname, '../tmp/'), resolve(__dirname, '../dist/2023/'))

fs.remove('tmp', (err) => {
  if (err) {
    throw err
  }
})
