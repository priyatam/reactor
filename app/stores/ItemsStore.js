'use strict';

import BaseStore from './BaseStore';
import {ITEMS_UPDATED, ITEM_SELECTED, ITEM_DESELECTED} from '../constants';

class ItemsStore extends BaseStore {

  emitChange() {
    this.emit(ITEMS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(ITEMS_UPDATED, callback);
  }
}

export default new ItemsStore();
