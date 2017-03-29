
import { createStore } from 'redux';
import Counter from './reducers/Counter';

let store = createStore(Counter);

export default store;
