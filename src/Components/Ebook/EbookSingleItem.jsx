
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const EbookSingleItem = ({ebook, AddToCart}) => {
    const { bookId, bookName, author, image, rating, category, tags, } = ebook;


    return (
        <>
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
                    <hr className='-ml-0 mb-2 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                    <div className='card-title  p-1 mb-2 rounded-lg text-base font-medium text-[#424242] -mt-4 flex gap-5 items-center'>
                    <Link className='no-underline  bg-[#59C6D2] text-[#fff] p-2 rounded-lg' to='https://www.banglabookshelf.com/Story%20Books/product_images/Humayun%20Ahmed/Himu/Moyurakkhi-By-Humayun-Ahmed.pdf' >Download Pdf</Link>
                    <Link className='no-underline  bg-[#23BE0A] text-[#fff] p-2 rounded-lg' onClick={()=>AddToCart(bookId)} >Add Cart</Link>
                        
                    </div>
                </div>
            </div>
            </>
    );
};

EbookSingleItem.propTypes = {
    ebook: PropTypes.object.isRequired
};

export default EbookSingleItem;