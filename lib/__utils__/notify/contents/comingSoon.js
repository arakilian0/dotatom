const clearTime = 1800
const clear = require('./clear.js')

module.exports = function() {
  let options = { dismissable: true }
  atom.notifications.addInfo('Coming Soon...', options)
  setTimeout(() => {
    clear('Coming Soon...')
  }, clearTime)
}
