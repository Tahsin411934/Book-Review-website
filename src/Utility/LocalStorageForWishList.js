const getStoredWishListBooks = () => {
    const storedWishListBook = localStorage.getItem('wishListBook');
    if (storedWishListBook) {
        return JSON.parse(storedWishListBook);
    }
    return [];
}

const saveWishListBook = id => {
    const storedWishListBook = getStoredWishListBooks();
    const exists = storedWishListBook.find(bookId => bookId === id);
    if (!exists) {
        storedWishListBook.push(id);
        localStorage.setItem('wishListBook', JSON.stringify(storedWishListBook));
    }
}

export { getStoredWishListBooks, saveWishListBook };
