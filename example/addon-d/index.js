/* jshint node: true */
'use strict';

module.exports = {
  name: 'addon-d',
  treeForAddon(tree) {
    console.log((this.parent.name || '') + ' > addon-d#treeForAddon');
    return this._super.treeForAddon.apply(this, arguments);
  },

 treeForTemplates(tree) {
    console.log((this.parent.name || '') + ' > addon-d#treeForTemplates');
    return this._super.treeForTemplates.apply(this, arguments);
  }
};
