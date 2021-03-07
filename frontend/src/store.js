import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { menuStateReducer } from './reducers/menuReducers'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  menuState: menuStateReducer,
})

const initialState = {
  menuState: { menuOpen: false },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
