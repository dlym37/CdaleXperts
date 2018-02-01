import axios from 'axios';

const initialState = {
    user: {},
    hamClick: false,
    address: false,
    searchData: {}
}

const HAM_CLICK = 'HAM_CLICK';
const GET_USER_INFO = 'GET_USER_INFO';
const CHANGE_ADDRESS = 'CHANGE ADDRESS';
const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

export function handleSubmit(val) {
   var data= axios.get('/api/search?value=' + val).then(res => {
    console.log('search results', res.data);
      return res.data;  
    })
    // this.props.history.push('/search');
    return {
        type: HANDLE_SUBMIT,
        payload: data
    }
}


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

export function changeAddress() {
    
    const guest = {
        customerid : 'guest'
    }
    return {
        type: CHANGE_ADDRESS,
        payload: guest
    }
}

export function getUserInfo(){
    let userData = axios.get('/auth/me').then( res => {
        console.log('reducer user', res.data)        
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
        case CHANGE_ADDRESS:
            return Object.assign({}, state, {address: action.payload});
        case HANDLE_SUBMIT:
            return Object.assign({}, state, {searchData: action.payload});        
        default:
            return state;
    }
}