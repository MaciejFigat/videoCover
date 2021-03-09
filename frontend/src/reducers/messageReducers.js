import { MESSAGE_CHANGE, MESSAGE_RESET } from '../constants/messageConstants'

export const userMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case MESSAGE_CHANGE:
      return { userMessageSent: action.payload }

    case MESSAGE_RESET:
      return { userMessageSent: { name: '', email: '', message: '' } }
    default:
      return state
  }
}
