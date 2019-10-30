import { combineReducers } from 'redux';
import upcoming from './upcoming';

const rootReducer = combineReducers({
  upcoming
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
