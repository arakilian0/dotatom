const fs = require('fs')
const path = require('path')
const exists = require('../../exists/index.js')
const os = require('os').platform()
const glob = require('glob')

function ignoreTargetNodes(nodes) {
  let targetNodes = []
  if(nodes) {
    nodes.forEach(node => {
      if(node.childNodes[0].nodeName === 'SPAN') {
        targetNodes.push(node)
      }
      else {
        let marker
        let nodeAttributes = node
          .childNodes[0]
          .childNodes[0]
          .attributes
        os === 'win32' ? marker = '\\' : marker = '/'
        for(const prop in nodeAttributes) {
          if(
           nodeAttributes[prop].name === 'data-name' &&
           nodeAttributes[prop].nodeValue !==
             exists.file().entry.split(marker)[0]
         ) { targetNodes.push(node) }
        }
      }
    })
  }
  return targetNodes
}


module.exports = function() {
  let marker
  let root
  let targetNodes
  let ignoreObject = {}
  let data = fs.readFileSync(exists.file().fullpath, 'utf8')

  os === 'win32' ? marker = '\\' : marker = '/'
  root = exists.project().projectpath.split(marker)
  targetNodes = document.querySelector(
    `span[data-name="${root[root.length - 1]}"]`
  ).parentNode.parentNode.childNodes[1].childNodes
  targetNodes = ignoreTargetNodes(targetNodes)

  ignoreObject.root = root[root.length - 1]
  ignoreObject.targetNodes = targetNodes

  if(data) {
    try {
      let json = JSON.parse(data)
      if(json.ignore.length > 0) {
        let patterns = []
        json.ignore.forEach(pattern => {
          let matches = glob.sync(pattern, { mark: true })
          if(matches.length > 0) {
            matches.forEach(match => { patterns.push(match) })
          }
        })
        if(patterns.length > 0) {
          ignoreObject.patterns = patterns
        } else ignoreObject = null
      } else ignoreObject = null
    }
    catch(err) {
      // notify error
      console.log(err)
    }
  }

  return ignoreObject
}
