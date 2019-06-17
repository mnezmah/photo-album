import { ADD_ALBUM } from '../actions/test'
import { SET_ALBUM } from '../actions/test'


export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_ALBUM:
      return state = [
        ...state,
        action.payload
      ]
      case SET_ALBUM:
        return action.payload
    default:
      return state
  }
}