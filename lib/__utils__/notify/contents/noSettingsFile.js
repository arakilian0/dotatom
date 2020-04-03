const settings = require('../../settings/index.js')

module.exports = function() {
  let options = {
    dismissable: true,
    buttons: [
      {
        text: 'Create Settings File',
        onDidClick: settings.create
      }
    ]
  }
  atom.notifications.addWarning(
    'No settings file was found. Would you like to create one?',
    options
  )
}
