import axios from 'axios';

const initialState = {
    user: {},
    hamClick: false
}

const HAM_CLICK = 'HAM_CLICK';
const GET_USER_INFO = 'GET_USER_INFO';

export function changeHamClick() {
        if(initialState.hamClick === false){
            initialState.hamClick = true;
        } else {
            initialState.hamClick = false;
        }
    return {
        type: HAM_CLICK,
        payload: initialState.hamClick
    }
}

export function getUserInfo(){
    let userData = axios.get('/auth/me').then ( res => {
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case HAM_CLICK:
            return Object.assign({}, state, { hamClick: action.payload });
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload});
        default:
            return state;
    }
}