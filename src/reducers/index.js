import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';
import logInOut from './logInOut';

const myReducer = combineReducers({
    tasks, 
    isDisplayForm, 
    itemEditing, 
    filterTable,
    search,
    sort, 
    logInOut
});

export default myReducer;