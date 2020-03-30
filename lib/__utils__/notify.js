function callThis() {
  console.log('asdasd')
}

function noSettingsFile() {
  atom.notifications.addWarning(
    'asdasdasd',
    {
      buttons: [
        {
          text: 'Create Configuration File',
          onDidClick: callThis
        }
      ],
      dismissable: true
    }
  )
}

module.exports.noSettingsFile = noSettingsFile
