import GET_userName from '../actions/action'
export default function(state = [], action) {
    switch(action.type) {
        case 'GET_firstName':
            return [action.payload.name, ...state];

    }
    return state;
}