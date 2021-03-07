import { MENU_CLOSE, MENU_OPEN } from '../constants/menuConstants'

export const openMenu = () => {
  return {
    type: MENU_OPEN,
  }
}

export const closeMenu = () => {
  return {
    type: MENU_CLOSE,
  }
}
