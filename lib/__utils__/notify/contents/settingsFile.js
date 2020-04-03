const settings = require('../../settings/index.js')

module.exports = function() {
  let options = {
    dismissable: true,
    buttons: [
      {
        text: 'Edit Settings File',
        onDidClick: settings.edit
      }
    ]
  }
  atom.notifications.addWarning(
    'A settings file was found. Would you like to edit it instead?',
    options
  )
}
