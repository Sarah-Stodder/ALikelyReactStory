import apiClientNoAuth from './clientNoAuth';

const endpoint = "/book"

const getBooks = async(cancelToken)=>{
    let error;
    let books;

    const response = await apiClientNoAuth(cancelToken).get(endpoint);

    if(response.ok){
        books = response.data.books
    }else{
        error = "Unexpected Error, please try again"
    }
    return{
        error,
        books
    }
}

const getBook = async(bookId, cancelToken)=>{
    let error;
    let book;

    const response = await apiClientNoAuth(cancelToken).get(endpoint+"/"+bookId);

    if(response.ok){
        book = response.data
    }else{
        error = "Unexpected Error, please try again"
    }
    return{
        error,
        book
    }
}

const exportedObject = {
    getBooks,
    getBook
}

export default exportedObject;