const getStoredReadBooks = () =>{
    const storedReadBook = localStorage.getItem('readBook');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}


const saveReadBook = id =>{
    const storedReadBook = getStoredReadBooks();
    const exists = storedReadBook.find(bookId => bookId === id);
    if(!exists){
        storedReadBook.push(id);
        localStorage.setItem('readBook', JSON.stringify(storedReadBook))
    }
}

export { getStoredReadBooks, saveReadBook}