'use babel'

import { CompositeDisposable } from 'atom'

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'dotatom:toggle': () => this.toggle()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  toggle() {
    console.log('Dotatom was toggled!')
  }

}
