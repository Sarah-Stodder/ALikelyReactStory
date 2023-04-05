import {create} from 'apisauce';

const apiClient = (token, cancelToken) =>create({
    baseURL: 'https://cae-bookstore.herokuapp.com',
    headers: {
    Authorization: 'Bearer ' + token
    },
    cancelToken
})

export default apiClient
