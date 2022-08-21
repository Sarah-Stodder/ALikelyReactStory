import apiClientNoAuth from './clientNoAuth';
import apiClientTokenAuth from './clientTokenAuth';

const endpoint = '/user'

const postUser = async(data, cancelToken)=>{
    const response = await apiClientNoAuth(cancelToken).post(endpoint, data);
    return response
}

const putUser = async(token, data, cancelToken)=>{
    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint, data);
    return response
}

const delUser = async(token, cancelToken)=>{
    const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint);
    return response
}

const exportedObject = {
    postUser,
    putUser,
    delUser
}

export default exportedObject;