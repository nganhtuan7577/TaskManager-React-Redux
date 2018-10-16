import * as types from './../constants/ActionTypes';
import Cookies from 'universal-cookie';

var cookies = new Cookies();

var initialState = false;

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.LOGIN:
            cookies.set('Token','This is a valid token!');
            return true;
        case types.LOGOUT:
            cookies.remove('Token');
            return false;
        default:
            return state;
    }
};

export default myReducer;