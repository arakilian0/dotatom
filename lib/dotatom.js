'use babel'

import utils from './__utils__/index.js'
import ignore from './ignore/index.js'
import { CompositeDisposable } from 'atom'

export default {

  isActive: null,
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'dotatom:activate': () => this.handle('activate')
      }),
      atom.commands.add('atom-workspace', {
        'dotatom:deactivate': () => this.handle('deactivate')
      }),
      atom.commands.add('atom-workspace', {
        'dotatom:edit': () => {
          if(utils.exists.file()) utils.settings.edit()
          else utils.notify.noSettingsFile()
        }
      }),
      atom.commands.add('atom-workspace', {
        'dotatom:create': () => {
          if(!utils.exists.file()) utils.settings.create()
          else utils.notify.settingsFile()
        }
      }),
      atom.commands.add('atom-workspace', {
        'dotatom:help': () => utils.help()
      }),
      atom.project.onDidChangeFiles(e => {
        let marker
        let event = e[0]
        let os = require('os').platform()

        os === 'win32' ? marker = '\\' : marker = '/'
        if(utils.exists.file()) {
          if(
            event.path.includes(
              utils.exists.file().entry.split(marker)[0]
            ) && this.isActive
          ) {
            ignore();ignore.reclick()
          }
        }
      })
    )
    // 'Prevent Default'
    document.querySelector('.tree-view-root')
      .addEventListener('click', (event) => {
        setTimeout(() => {
          if(this.isActive) {
            ignore()
          }
        }, 400)
      })
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  handle(action) {
    if(action === 'activate') this.isActive = true
    if(action === 'deactivate') {
      this.isActive = null
      ignore.reclick()
    }

    if(this.isActive && utils.exists.file()) {
      ignore()
      utils.notify.activated()
    }
    else if(this.isActive && !utils.exists.file()) {
      utils.notify.noSettingsFile()
    }
    else { utils.notify.deactivated() }
  }

}
