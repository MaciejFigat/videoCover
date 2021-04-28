import { VIDEO_ON, VIDEO_OFF } from '../constants/videoConstants'

export const videoStateReducer = (state = { videoOn: false }, action) => {
  switch (action.type) {
    case VIDEO_ON:
      return { videoOn: true }
    case VIDEO_OFF:
      return { videoOn: false }

    default:
      return state
  }
}
