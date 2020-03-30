const notify = require('../../notify/index.js')
const exists = require('../../exists/index.js')

module.exports = function() {
  notify.clear('There already is a settings file here. Would you like to edit it?')
  atom.workspace.open(exists.file().entry)
}
