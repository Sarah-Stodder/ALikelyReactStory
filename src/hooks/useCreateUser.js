import {useEffect} from 'react';
import apiUser from '../api/apiUser';
import {CancelToken} from 'apisauce';
import {useNavigate} from 'react-router-dom';

export default function useCreateUser(userData){
    const navigate = useNavigate()

    useEffect(()=>{

            const source = CancelToken.source()
            const createUser = async()=>{
                const response = await apiUser.postUser(userData, source.token);
                console.log(response);
                if (response){
                    console.log(`User: ${userData.first_name} ${userData.last_name} Created`)
                    navigate('/login')
                }else if(response === false && response !== undefined){
                    console.log(`Please reauthorize you account`)
                }
            }
            if(userData.first_name){
                createUser()
            }
            return ()=>{source.cancel()}
            
        },
        [userData, navigate]
    )
}