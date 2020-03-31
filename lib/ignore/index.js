const utils = require('../__utils__/index.js')
const hide = require('./contents/hide.js')

module.exports = function() {
  function ignore(node) {
    let nodes = node.childNodes

    for(let i = 0; i < nodes.length; i++) {
      if(!nodes[i]) { continue }
      if(nodes[i].childNodes.length > 0)  {
        ignore(nodes[i])
        hide(nodes[i])
      }
    }
  }

  if(utils.format.ignore()) {
    let settings = utils.format.ignore()

    settings.targetNodes.forEach(node => {
      ignore(node)
    })
  }
}

module.exports.reclick = require('./contents/reclick.js')
