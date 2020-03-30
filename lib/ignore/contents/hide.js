const path = require('path')
const utils = require('../../__utils__/index.js')

module.exports = function(node) {
  function hide(node) {
    node.parentNode.classList.add('dotatom-animate')
    setTimeout(() => {
      node.parentNode.classList.add('dotatom-hide')
    }, 400)
  }

  let project = utils.exists.project().projectpath
  let patterns = utils.format.ignore().patterns

  if(project && patterns) {
    patterns.forEach(pattern => {
      let fullpath = path.join(project, pattern)
      if(fullpath && node.getAttribute('data-path')) {
        if(
          fullpath[fullpath.length - 1] === '\\' ||
          fullpath[fullpath.length - 1] === '/'
        ) {
          fullpath = fullpath.substring(0, fullpath.length - 1)
          if(node.getAttribute('data-path') === fullpath) {
            hide(node)
          }
        }
        else {
          if(node.getAttribute('data-path') === fullpath) {
            hide(node)
          }
        }
      }
    })
  }
}
