import  { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredReadBooks } from '../../Utility/LocalStorage';
import { getStoredWishListBooks } from '../../Utility/LocalStorageForWishList';
import ListedSingleBook from './ListedSingleBook';

const ListedBook = () => {
    const Books = useLoaderData();
    console.log(Books);

    const [tabIndex, setTabIndex] = useState(0);
    const [readBooks, setReadBooks] = useState([]);
    const [wishListBooks, setWishListBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getStoredReadBooks();
        const readBook = Books.filter(book => storedReadBooks.includes(book.bookId));
        setReadBooks(readBook);

        const storedWishListBooks = getStoredWishListBooks();
        const wishListBook = Books.filter(book => storedWishListBooks.includes(book.bookId));
        setWishListBooks(wishListBook);
    }, [Books]);

    console.log(readBooks);

    return (
        <div className="container mx-auto">
            <div className="text-center p-1 rounded-xl" style={{ backgroundColor: 'rgba(19, 19, 19, 0.05)' }}>
                <h1>Books</h1>
            </div>
            <div className="flex items-center justify-center mt-10">
                <select className="select select-primary w-full-sm max-w-xs bg-[#23BE0A] text-[#fff] m-auto">
                    <option disabled defaultValue>Select sort by</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
            </div>
            <div role="tablist" className="tabs tabs-lifted grid grid-cols-6">
                <Link onClick={() => setTabIndex(0)} role="tab" className={`tab  ${tabIndex === 0 ? 'tab-active' : ''}`}>Tab 1</Link>
                <Link onClick={() => setTabIndex(1)} role="tab" className={`tab ${tabIndex === 1 ? 'tab-active' : ''}`}>Tab 2</Link>
            </div>
            {tabIndex === 0 &&
                readBooks.map(readBook => <ListedSingleBook key={readBook.bookId} book={readBook} />)
            }
            {tabIndex === 1 &&
                wishListBooks.map(wishListBook => <ListedSingleBook key={wishListBook.bookId} book={wishListBook} />)
            }
        </div>
    );
};

export default ListedBook;
