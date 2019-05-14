// import {createStore} from 'redux';
// import reducer from './reducer'

// const store = createStore(reducer);

// export default store;

import {combineReducers} from 'redux';
import {user} from './user/index'

// export default combineReducers({user, counter, auth})
export default combineReducers({user})