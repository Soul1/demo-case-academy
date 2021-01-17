import {combineReducers, createStore} from 'redux';
import {page, user} from './reducers';


const reducers = combineReducers({
  page, user
})

export default createStore(reducers)
