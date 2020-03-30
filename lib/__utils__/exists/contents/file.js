const fs = require('fs')
const path = require('path')
const project = require('./project.js')
const entry = path.normalize(
  require('../../../../package.json').config.entry
)

module.exports = function() {
  let fullpath
  let exists = false

  if(project() && entry) {
    fullpath = path.join(project().projectpath, project().entry)
    if(fs.existsSync(fullpath)) {
      exists = { entry, fullpath }
    } else exists = false
  }
  return exists
}
