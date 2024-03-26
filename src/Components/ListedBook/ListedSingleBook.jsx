import React from 'react';
import { Link } from 'react-router-dom';
import { GrLocation } from "react-icons/gr";
import { FaUserFriends } from "react-icons/fa";
import { TiPrinter } from "react-icons/ti";

const ListedSingleBook = ({ book }) => {
    console.log(book)

    return (
        <div key={book.bookId} className="container mx-auto mt-8">
            <div className="card shadow-lg hero-content  gap-10 grid lg:grid-cols-4">
                <div className="p-8 lg:col-span-1  lg:w-[60%] lg:flex justify-center items-center rounded-lg" style={{ backgroundColor: 'rgba(19, 19, 19, 0.05)' }}>
                    <img src={book.image} className="lg:w-[100%] rounded-lg " alt={book.bookName} />
                </div>
                <div className="w-[100%] lg:col-span-3">
                    <h1 className="text-2xl font-bold">{book.bookName}</h1>
                    <h1 className="p-1 rounded-lg text-base font-medium text-[#424242] -mt-2">By: {book.author}</h1>
                    <div className='flex gap-10 items-center -mt-5 -mb-5'>
                        <p>Tags</p>
                        {book.tags.map(tag => (
                            <p key={tag} className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#23BE0A]'>{tag}</p>
                        ))}
                        <div className='flex items-center justify-center gap-1' style={{color:'rgba(19, 19, 19, 0.8)'}}>
                            <GrLocation />
                            <p>Year of Publishing: {book.yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-8' style={{color:'rgba(19, 19, 19, 0.8)'}}>
                        <div className='flex items-center gap-2'>
                            <FaUserFriends />
                            <p>publisher: {book.publisher}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <TiPrinter />
                            <span>{book.totalPages}</span>
                        </div>
                    </div>
                    <hr />

                   <div className='flex items-center  gap-5'>
                    <p style={{backgroundColor:'rgba(50, 142, 255, 0.15)'}} className='text-[#328EFF] rounded-badge p-2 text-base font-normal'> Category: {book.category}</p>
                    <p style={{backgroundColor:'rgba(255, 172, 51, 0.15)'}} className='text-[#FFAC33] rounded-badge px-3 py-2 text-base font-normal'>Rating: {book.rating}</p>
                    <Link  className='text-[#fff] bg-[#23BE0A] no-underline py-2 rounded-badge px-3 text-base font-normal' to={`/bookDetails/${book.bookId}`}> view details</Link>
                   </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ListedSingleBook;
