import { createStore } from 'redux'
import appRedusers from '../redusers'

let store = createStore(appRedusers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
