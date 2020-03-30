const clearTime = 1800
const clear = require('./clear.js')

module.exports = function() {
  let options = { dismissable: true }
  atom.notifications.addInfo('Dotatom is no longer active.', options)
  setTimeout(() => {
    clear('Dotatom is no longer active.')
  }, clearTime)
}
