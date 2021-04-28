import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { menuStateReducer } from './reducers/menuReducers'
import { userMessageReducer } from './reducers/messageReducers'
import { videoStateReducer } from './reducers/videoReducers'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  menuState: menuStateReducer,
  userMessage: userMessageReducer,
  videoState: videoStateReducer,
})

const initialState = {
  userMessage: { userMessageSent: { name: '', email: '', message: '' } },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
