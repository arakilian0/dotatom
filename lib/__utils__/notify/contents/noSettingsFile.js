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
    'There is no settings file here. Would you like to create it?',
    options
  )
}
