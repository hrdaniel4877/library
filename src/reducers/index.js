import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
		books: BooksReducer
});

export default rootReducer;





/*
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
*/