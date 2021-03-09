import { MESSAGE_CHANGE, MESSAGE_RESET } from '../constants/messageConstants'

export const messageChange = (data) => {
  return {
    type: MESSAGE_CHANGE,
    payload: data,
  }
}

export const messageReset = () => {
  return {
    type: MESSAGE_RESET,
  }
}
