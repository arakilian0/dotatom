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
    'There already is a settings file here. Would you like to edit it?',
    options
  )
}
