const utils = require('../../__utils__/index.js')

module.exports = function() {
  let elToClick

  function findFolder(node) {
    let nodes = node.childNodes
    let fullpath = utils.exists.project().projectpath

    for(let i = 0; i < nodes.length; i++) {
      if(!nodes[i]) { continue }
      if(nodes[i].childNodes.length > 0) {
        findFolder(nodes[i])
        if(nodes[i].getAttribute('data-path')) {
          if(nodes[i].getAttribute('data-path') === fullpath) {
            elToClick = nodes[i]
          }
        }
      }
    }
  }

  if(utils.exists.project()) {
    findFolder(document.querySelector('.tree-view-root'))
    if(elToClick) {
      elToClick.parentNode.click()
      setTimeout(() => {
        elToClick.parentNode.click()
      }, 400)
    }
  }
}
