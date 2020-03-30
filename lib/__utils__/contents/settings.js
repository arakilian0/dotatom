const fs = require('fs')
const path = require('path')
const notify = require('./notify.js')
const exists = require('./exists.js')
const os = require('os').platform()

function create() {
  notify.clear('There is no settings file here. Would you like to create it?')
  try {
    let marker
    let entryFolder

    os === 'win32' ?
      marker = '\\' :
      marker = '/'

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

function edit() {
  notify.clear('There already is a settings file here. Would you like to edit it?')
  atom.workspace.open(exists.file().entry)
}

module.exports.edit = edit
module.exports.create = create
