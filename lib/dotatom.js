'use babel'

import notify from './__utils__/notify.js'
import exists from './__utils__/exists.js'
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
          if(exists.file()) atom.workspace.open(exists.file().entry)
          else notify.noSettingsFile()
        }
      })
    )
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  handle(action) {
    if(action === 'activate') this.isActive = true
    if(action === 'deactivate') this.isActive = null

    console.log(this.isActive)
  }

}
