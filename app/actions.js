'use strict'

import AppDispatcher from './dispatcher'
import {ITEM_SELECTED, ITEM_DESELECTED} from './constants'

export default {

  selectItem(item) {
    AppDispatcher.dispatch({
      actionType: ITEM_SELECTED,
      item: item
    })
  },

  deSelectItem(item) {
    AppDispatcher.dispatch({
      actionType: ITEM_DESELECTED,
      item: item
    })
  }
}
