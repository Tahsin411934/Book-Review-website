import { getStoredReadBooks } from "./LocalStorage";

const getStoredWishListBooks = () => {
    const storedWishListBook = localStorage.getItem('wishListBook');
    if (storedWishListBook) {
        return JSON.parse(storedWishListBook);
    }
    return [];
}

const saveWishListBook = id => {
    const storedWishListBook = getStoredWishListBooks();
    const storedReadBooks = getStoredReadBooks();
    const isMatch = storedReadBooks.find(Id=>Id===id);
    const exists = storedWishListBook.find(bookId => bookId === id);
    if (!exists && !isMatch) {
        storedWishListBook.push(id);
        localStorage.setItem('wishListBook', JSON.stringify(storedWishListBook));
    }
}

export { getStoredWishListBooks, saveWishListBook };
