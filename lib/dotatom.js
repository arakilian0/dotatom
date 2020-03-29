'use babel';

import DotatomView from './dotatom-view';
import { CompositeDisposable } from 'atom';

export default {

  dotatomView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.dotatomView = new DotatomView(state.dotatomViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.dotatomView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'dotatom:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.dotatomView.destroy();
  },

  serialize() {
    return {
      dotatomViewState: this.dotatomView.serialize()
    };
  },

  toggle() {
    console.log('Dotatom was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
