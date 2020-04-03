const notify = require('../../notify/index.js')
const exists = require('../../exists/index.js')

module.exports = function() {
  notify.clear('A settings file was found. Would you like to edit it instead?')
  atom.workspace.open(exists.file().entry)
}
