import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredReadBooks } from '../../Utility/LocalStorage';
import { getStoredWishListBooks } from '../../Utility/LocalStorageForWishList';
import ListedSingleBook from './ListedSingleBook';

const ListedBook = () => {
    const Books = useLoaderData();
    const [tabIndex, setTabIndex] = useState(0);
    const [readBooks, setReadBooks] = useState([]);
    const [wishListBooks, setWishListBooks] = useState([]);
    const [sortBy, setSortBy] = useState('');

//get and check local storage data
    useEffect(() => {
//read list 
        const storedReadBooks = getStoredReadBooks();
        const readBook = Books.filter(book => storedReadBooks.includes(book.bookId));
        setReadBooks(readBook);
//wishlist 
        const storedWishListBooks = getStoredWishListBooks();
        const wishListBook = Books.filter(book => storedWishListBooks.includes(book.bookId));
        setWishListBooks(wishListBook);
    }, [Books]);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };
// sort decending
    const sortBooks = (books) => {
        return books.sort((a, b) => {
            return b[sortBy] - a[sortBy];
      });
    };

    return (
        <div className="container mx-auto" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            <div className="text-center p-1 rounded-xl" style={{ backgroundColor: 'rgba(19, 19, 19, 0.05)' }}>
                <h1 className='text-2xl lg:text-3xl font-bold text-[#131313]'>Listed Books</h1>
                <p className='text-slate-600'>
                &quot; Discover Your Next Read: Explore Our Collection of Books &quot;</p>
            </div>
            <div className="flex items-center justify-center mt-10">
                <select className="select select-primary w-full-sm max-w-xs bg-[#23BE0A] text-[#fff] m-auto" onChange={handleSortChange}>
                    <option disabled selected className='bg-[#fff] text-[#fff] hidden'>Sorted By</option>
                    <option className='bg-[#fff] w-[full] text-[#131313] text-base font-normal' value="rating">Sort by Rating</option>
                    <option className='bg-[#fff] w-[full] text-[#131313] text-base font-normal' value="totalPages">Sort by Number of Pages</option>
                    <option className='bg-[#fff] w-[full] text-[#131313] text-base font-normal' value="yearOfPublishing">Sort by Year of Publishing</option>
                </select>
            </div>

            <div role="tablist" className="w-[100%] tabs tabs-lifted lg:grid lg:grid-cols-6 md:grid-cols-3 mt-16" style={{ color: 'rgba(19, 19, 19, 0.8)' }}>
                <Link onClick={() => setTabIndex(0)} role="tab" className={`tab text-lg font-medium no-underline lg:col-span-1  ${tabIndex === 0 ? 'tab-active' : ''}`}>Read Books</Link>
                <Link onClick={() => setTabIndex(1)} role="tab" className={`tab text-lg font-medium no-underline col-span-1 ${tabIndex === 1 ? 'tab-active' : ''}`}>Wishlist Books</Link>
            </div>

            <div>
                {tabIndex === 0 &&
                    sortBooks(readBooks).map(readBook => <ListedSingleBook key={readBook.bookId} book={readBook} />)
                }
                {tabIndex === 1 &&
                    sortBooks(wishListBooks).map(wishListBook => <ListedSingleBook key={wishListBook.bookId} book={wishListBook} />)
                }
            </div>
        </div>
    );
};

export default ListedBook;
