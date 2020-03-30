const fs = require('fs')
const path = require('path')
const entry = require('../../package.json').config.entry

module.exports = function() {
  let exists = false
  let project = atom.project.getPaths()[0]

  if(project && entry) {
    if(fs.existsSync(path.join(project, entry))) exists = true
    else exists = false
  }

  return exists
}
