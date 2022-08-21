
import {createContext, useState, useReducer, useEffect} from 'react';
import {listReducer, listActions} from '../reducers/listReducer';


export const BookContext = createContext()

const BookContextProvider = ({children})=>{

    const getListFromLS =()=>{
        let readingList = localStorage.getItem('readingList')
        if(readingList){
            return JSON.parse(readingList)
        }
    }

    const [bookList,setBookList] = useState([])
    const [readingList, dispatch] = useReducer(listReducer, getListFromLS()?? [])

    
    useEffect(()=>{
            localStorage.setItem('ReadingList', JSON.stringify(readingList))
    }, [readingList]
    )
    

    const values = {
        bookList,
        setBookList,
        readingList,
        addBook:(book)=>{
            dispatch({type: listActions.addBook, book})
            
        },
        removeBook:(book)=>{
            dispatch({type: listActions.removeBook, book})
        },
        clearList:()=>{
            dispatch({type: listActions.clearList})
        }
    }

    return(
        <BookContext.Provider value = {values}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider