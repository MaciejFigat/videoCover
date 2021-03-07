import { MENU_CLOSE, MENU_OPEN } from '../constants/menuConstants'

export const menuStateReducer = (state = { menuOpen: false }, action) => {
  switch (action.type) {
    case MENU_OPEN:
      return { menuOpen: true }
    case MENU_CLOSE:
      return { menuOpen: false }

    default:
      return state
  }
}
