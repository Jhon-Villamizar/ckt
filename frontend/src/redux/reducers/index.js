import UsersData from './usersData';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  users: UsersData,
});

export default allReducers;