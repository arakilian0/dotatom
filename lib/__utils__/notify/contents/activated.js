const clearTime = 1800
const clear = require('./clear.js')

module.exports = function() {
  let options = { dismissable: true }
  atom.notifications.addSuccess('Dotatom is active.', options)
  setTimeout(() => {
    clear('Dotatom is active.')
  }, clearTime)
}
