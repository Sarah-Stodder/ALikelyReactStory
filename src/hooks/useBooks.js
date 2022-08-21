import {useEffect, useState} from 'react';
import apiBook from '../api/apiBook';
import {CancelToken} from 'apisauce';

export default function useBooks(){
    const [books, setBooks] = useState([])

    useEffect(
        ()=>{ 
            const source=CancelToken.source();
            const showBooks=async()=>{
                const response = await apiBook.getBooks(source.token)
                setBooks(response)
            }
            showBooks()
            return ()=>{source.cancel();}
        },
        []
    )
    return books
}

