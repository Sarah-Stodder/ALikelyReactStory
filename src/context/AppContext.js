import {createContext, useState} from 'react';

export const AppContext = createContext()

const AppContextProvider=({children})=>{

    const getUserFromLS =()=>{
        let user = localStorage.getItem('user')
        if(user){
            return JSON.parse(user)
        }
    }
    const [alert, setAlert] = useState({})
    const [user, _setUser] = useState(getUserFromLS())


    const setUser = (user) =>{
        localStorage.setItem('user', JSON.stringify(user))
        _setUser(user)
    }

    const values = {
        alert,
        setAlert,
        user,
        setUser
    }

    return(
        <AppContext.Provider value = {values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider