export default function(state = null,action) {
    switch(action.type) {
        case 'login':
            if((localStorage.getItem('c')===action.payload.userName)&&(localStorage.getItem('d')===action.payload.passwd))
            {
               return 'sucessfull'
            } else {
                return 'not sucessful'
            }
        default:
                return state
    }
}