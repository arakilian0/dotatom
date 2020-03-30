const fs = require('fs')
const path = require('path')
const entry = path.normalize(
  require('../../../../package.json').config.entry
)

module.exports = function() {
  let target
  let projectpath
  let exists = false

  if(atom.project.getPaths()[0] && entry) {
    projectpath = atom.project.getPaths()[0]
    target = path.join(projectpath, entry)
    exists = { entry, projectpath, target }
  }
  return exists
}
