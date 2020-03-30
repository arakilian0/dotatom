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
      })
    )
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  handle(action) {
    if(action === 'activate') this.isActive = true
    if(action === 'deactivate') this.isActive = null

    if(this.isActive) {
      ignore()
      utils.notify.activated()
    }
    else { utils.notify.deactivated() }
  }

}
