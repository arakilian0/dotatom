const settings = require('./settings.js')
const clearTime = 1800

function clear(select=null) {
  let notifs = document.querySelector('atom-notifications')

  if(notifs) {
    if(select === null) notifs.innerHTML = ''
    else {
      notifs.childNodes.forEach(notif => {
        if(notif.firstChild.innerText.includes(select)) notif.remove()
      })
    }
  }
}

function activated() {
  let options = { dismissable: true }
  atom.notifications.addSuccess('Dotatom is active.', options)
  setTimeout(() => {
    clear('Dotatom is active.')
  }, clearTime)
}

function deactivated() {
  let options = { dismissable: true }
  atom.notifications.addInfo('Dotatom is no longer active.', options)
  setTimeout(() => {
    clear('Dotatom is no longer active.')
  }, clearTime)
}

function settingsFile() {
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

function noSettingsFile() {
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

module.exports.clear = clear
module.exports.activated = activated
module.exports.deactivated = deactivated
module.exports.settingsFile = settingsFile
module.exports.noSettingsFile = noSettingsFile
