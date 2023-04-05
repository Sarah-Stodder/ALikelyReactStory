import {useEffect, useState} from 'react';
import apiBook from '../api/apiBook';
import {CancelToken} from 'apisauce';

export default function useBook(bookId){
    const [book, setBook] = useState([])

    useEffect(
        ()=>{ 
            const source=CancelToken.source();
            const showBook=async()=>{
                const response = await apiBook.getBook(bookId,source.token)
                setBook(response)
            }
            showBook()
            return ()=>{source.cancel();}
        },
        [bookId]
    )
    return book
}
