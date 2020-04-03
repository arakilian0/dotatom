const fs = require('fs')
const path = require('path')
const edit = require('./edit.js')
const os = require('os').platform()
const notify = require('../../notify/index.js')
const exists = require('../../exists/index.js')


module.exports = function() {
  notify.clear('No settings file was found. Would you like to create one?')
  try {
    let marker
    let entryFolder

    os === 'win32' ? marker = '\\' : marker = '/'
    entryFolder = exists.project().entry.split(marker)[0]

    if (
      !fs.existsSync(entryFolder) ||
      fs.existsSync(entryFolder) &&
      !fs.existsSync(exists.project().entry)
    ) {
      !fs.existsSync(entryFolder) ?
        fs.mkdirSync(entryFolder) : console.log('folder already here')
      fs.writeFile(exists.project().entry, `{
  "ignore": [],
  "snippets": [],
  "server": {},
  "style": {}
}`, 'utf8', (err) => {
        if (err) throw err;
        edit()
      })
    }
  } catch (err) { console.log(err) }
}
