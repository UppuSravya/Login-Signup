
export default function login(user) {
    return {
        type: 'login',
        payload: user
    };
}