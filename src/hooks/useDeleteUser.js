import {useEffect, useContext} from 'react';
import apiUser from '../api/apiUser';
import {CancelToken} from 'apisauce';
import {AppContext} from '../context/AppContext';

export default function useDeleteUser(){
    const {user, setUser} = useContext(AppContext)

    useEffect(()=>{

            const source = CancelToken.source()
            const deleteUser = async()=>{
                const response = await apiUser.delUser(user?.token, source.token);
                console.log(response)
                setUser({})
            }
            deleteUser()
            return ()=>{source.cancel()}
            
        },
        []
    )
}