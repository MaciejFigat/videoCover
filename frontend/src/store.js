import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { menuStateReducer } from './reducers/menuReducers'
import { userMessageReducer } from './reducers/messageReducers'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  menuState: menuStateReducer,
  userMessage: userMessageReducer,
})

const initialState = {
  menuState: { menuOpen: false },
  userMessage: { userMessageSent: { name: '', email: '', message: '' } },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
