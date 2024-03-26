import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags, } = book;
    return (
        <Link className='no-underline' to={`/bookDetails/${bookId}`} >
            <div className="card lg:w-80 mb-5 bg-base-100 shadow-xl text-2xl font-bold text-[#131313]" style={{ fontFamily: "Playfair Display, serif" }}>
                <figure className="p-10 bg-[#F3F3F3] rounded-xl">
                    <img src={image} alt="Book Image" className="rounded-xl h-[180px]" />
                </figure>
                <div className="-mt-4 ml-10">
                    <div className='flex  gap-10'>
                        <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#23BE0A]'>{tags[0]}</p>
                        <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#23BE0A]'>{tags[1]}</p>
                    </div>
                    <h2 className="card-title -mt-2">{bookName}</h2>
                    <span className='  card-title p-1 rounded-lg text-base font-medium text-[#424242] -mt-4'>By: {author}</span>
                    <hr className='-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                    <div className='card-title p-1 rounded-lg text-base font-medium text-[#424242] -mt-4 flex justify-between items-center'>
                        <p>{category}</p>
                        <div className='flex justify-center items-center gap-2 mr-7'>
                            <p>{rating}  </p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
//proptype validation
Book.propTypes = {
    book: PropTypes.object.isRequired
};

export default Book;
