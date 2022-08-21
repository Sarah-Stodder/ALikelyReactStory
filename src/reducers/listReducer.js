

const listActions={
    addBook: "addBook",
    removeBook: "removeBook",
    clearList: "clearList"
}

function listReducer(readingList, {type, book}){
    
    switch(type){
        case listActions.addBook:
            let sliceList = readingList.slice()
            for(let passage of sliceList){
                if(passage.id === book.id){
                    return sliceList
                }
            }
            return [...readingList, book]
        case listActions.removeBook:
            let newList = readingList.slice()
            for(let novel of newList){
                if(novel.id === book.id){
                    newList.splice(newList.indexOf(novel), 1)
                    return newList
                }
            }
            return newList
        case listActions.clearList:
            return []
        default:
            throw new Error('Uh Error?')
    }
}

export{
    listReducer,
    listActions
}