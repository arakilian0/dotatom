'use babel'

import { CompositeDisposable } from 'atom'

export default {

  subscriptions: null,
  isActive: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'dotatom:deactivate': () => this.handle('deactivate')
      }),
      atom.commands.add('atom-workspace', {
        'dotatom:activate': () => this.handle('activate')
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
