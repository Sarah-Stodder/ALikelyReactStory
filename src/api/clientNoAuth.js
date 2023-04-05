import {create} from 'apisauce';

const apiClient = (cancelToken) => create({
    baseURL: 'https://cae-bookstore.herokuapp.com',
    cancelToken
})

export default apiClient
