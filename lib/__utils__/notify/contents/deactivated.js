const clearTime = 1800
const clear = require('./clear.js')

module.exports = function() {
  let options = { dismissable: true }
  atom.notifications.addInfo('Dotatom is not active.', options)
  setTimeout(() => {
    clear('Dotatom is not active.')
  }, clearTime)
}
