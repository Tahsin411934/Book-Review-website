import React from 'react';
import { Link } from 'react-router-dom';

const ListedSingleBook = ({ book }) => {
    console.log(book)
    
    return (
        <div key={book.bookId} className="container mx-auto">
            <div className="card shadow-lg hero-content flex-col gap-10 items-center lg:flex-row">
                <div className="w-[60%] flex justify-center items-center rounded-lg" style={{ backgroundColor: 'rgba(19, 19, 19, 0.05)' }}>
                    <img src={book.image} className="w-[70%] rounded-lg" alt={book.bookName} />
                </div>
                <div className="w-[100%]">
                    <h1 className="text-5xl font-bold">{book.bookName}</h1>
                    <h1 className="p-1 rounded-lg text-base font-medium text-[#424242] -mt-8">By: {book.author}</h1>
                    <h1 className="p-1 rounded-lg text-base font-medium text-[#424242] -mt-2">{book.category}</h1>
                    <div className='flex gap-10 items-center'>
                        <p>Tags</p>
                        {book.tags.map(tag => (
                            <p key={tag} className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#23BE0A]'>{tag}</p>
                        ))}
                    </div>
                    <div>
                        <div className="flex gap-10">
                            <p>Number of Pages:</p>
                            <p>{book.totalPages}</p>
                        </div>
                        <div className="flex gap-10 -mt-5">
                            <p>Publisher:</p>
                            <p>{book.publisher}</p>
                        </div>
                        <div className="flex gap-10 -mt-5">
                            <p>Year of Publishing:</p>
                            <p>{book.yearOfPublishing}</p>
                        </div>
                        <div className="flex gap-10 -mt-5">
                            <p>Rating:</p>
                            <p>{book.rating}</p>
                        </div>
                    </div>
                    <Link to={`/bookDetails/${book.bookId}`}> view details</Link>
                </div>
            </div>
        </div>
    );
};

export default ListedSingleBook;
