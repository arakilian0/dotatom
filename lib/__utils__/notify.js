function callThis() {
  console.log('asdasd')
}

function activated() {
  atom.notifications.addSuccess(
    'Dotatom is active.'
  )
}

function deactivated() {
  atom.notifications.addInfo(
    'Dotatom is no longer active.'
  )
}

function settingsFile() {
  atom.notifications.addWarning(
    'There already is a settings file here. \nWould you like to edit it?',
    {
      buttons: [
        {
          text: 'Edit Settings File',
          onDidClick: callThis
        }
      ],
      dismissable: false
    }
  )
}

function noSettingsFile() {
  atom.notifications.addWarning(
    'There is no settings file here. \nWould you like to create it?',
    {
      buttons: [
        {
          text: 'Create Settings File',
          onDidClick: callThis
        }
      ],
      dismissable: false
    }
  )
}

module.exports.activated = activated
module.exports.deactivated = deactivated
module.exports.settingsFile = settingsFile
module.exports.noSettingsFile = noSettingsFile
