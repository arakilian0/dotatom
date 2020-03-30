const fs = require('fs')
const path = require('path')
const entry = path.normalize(
  require('../../package.json').config.entry
)

function project() {
  let exists = false

  if(atom.project.getPaths()[0]) {
    exists = atom.project.getPaths()[0]
  }
  return exists
}

function file() {
  let fullpath
  let exists = false

  if(project() && entry) {
    fullpath = path.join(project(), entry)
    if(fs.existsSync(fullpath)) {
      exists = { entry, fullpath }
    } else exists = false
  }
  return exists
}

module.exports.project = project
module.exports.file = file
