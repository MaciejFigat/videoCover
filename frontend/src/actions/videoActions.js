import { VIDEO_ON, VIDEO_OFF } from '../constants/videoConstants'

export const turnVideoOn = () => {
  return {
    type: VIDEO_ON,
  }
}

export const turnVideoOff = () => {
  return {
    type: VIDEO_OFF,
  }
}
