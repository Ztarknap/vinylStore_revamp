export const getToken = () => {
    return localStorage.getItem('token');
}

export const setToken = () => {
    localStorage.setItem('token');
}

export const removeToken = () => {
    localStorage.removeItem('token');

}