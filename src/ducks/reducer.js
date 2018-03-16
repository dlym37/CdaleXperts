import axios from 'axios';

const initialState = {
    user: {},
    hamClick: false,
    address: false,
    searchData: []
}

const HAM_CLICK = 'HAM_CLICK';
const GET_USER_INFO = 'GET_USER_INFO';
const CHANGE_ADDRESS = 'CHANGE ADDRESS';
const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

export function handleSubmit(url, val) {
    var data = axios.get('/api/search?value=' + val).then(res => {
        url.history.push('/search');
        return res.data;
    })
    return {
        type: HANDLE_SUBMIT,
        payload: data
    }
}


export function changeHamClick() {
    if (initialState.hamClick === false) {
        initialState.hamClick = true;
    } else {
        initialState.hamClick = false;
    }
    return {
        type: HAM_CLICK,
        payload: initialState.hamClick
    }
}

export function changeAddress() {

    const guest = {
        customerid: 'guest'
    }
    return {
        type: CHANGE_ADDRESS,
        payload: guest
    }
}

export function getUserInfo() {
    let userData = axios.get('/auth/me').then(res => {
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
            return Object.assign({}, state, { user: action.payload });
        case CHANGE_ADDRESS:
            return Object.assign({}, state, { user: action.payload });
        case HANDLE_SUBMIT + '_FULFILLED':
            console.log("actioning", action.payload)
            return Object.assign({}, state, { searchData: action.payload });
        default:
            return state;
    }
}