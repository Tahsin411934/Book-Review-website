import { useLoaderData, useParams } from "react-router-dom";
import { getStoredReadBooks, saveReadBook } from "../../Utility/LocalStorage";
import { getStoredWishListBooks, saveWishListBook } from "../../Utility/LocalStorageForWishList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BooksDetails = () => {
    const Books = useLoaderData();
    const { id } = useParams();

    const targetBook = Books.find(book => book.bookId == id)
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = targetBook;

    //Handle Read Button
    const handleReadBtn = () => {
        const storedReadBooks = getStoredReadBooks();
        const isMatch = storedReadBooks.find(Id => Id === bookId);
        //Set tostify
        isMatch ? toast.error('already added') : toast.success('Successfully created!');
        saveReadBook(bookId);
    }
    //Handle WishList button
    const handleWishListBtn = () => {
        const storedWishListBooks = getStoredWishListBooks();
        const isExist = storedWishListBooks.find(Id => Id === bookId);
        const storedReadBooks = getStoredReadBooks();
        const isMatch = storedReadBooks.find(Id => Id === bookId);
        //Set tostify
        if (isMatch) {
            toast.error('You Already added to read item !');
        }
        else if (isExist) {
            toast.error('Already added to wishlist !');
        }
        else {
            saveWishListBook(bookId);
            toast.success('Successfully added to wishlist!');
        }
    }

    return (
        <div className="container mx-auto">
            <div className="">
                <div className="hero-content flex-col gap-10 items-center  lg:flex-row">
                    <div className="w-[60%] h-[573px] flex justify-center items-center p-14 rounded-lg" style={{ backgroundColor: 'rgba(19, 19, 19, 0.05)' }}>
                        <img src={image} className=" w-[70%] h-[450px] rounded-lg " />
                    </div>
                    <div className="w-[100%]">
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <h1 className="p-1 rounded-lg text-base font-medium text-[#424242] -mt-8" >By: {author}</h1>
                        <hr className='-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                        <h1 className="p-1 rounded-lg text-base font-medium text-[#424242] -mt-2">{category}</h1>
                        <hr className='-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                        <p className="py-6"><span className="font-bold">Review: </span> {review}</p>
                        <div className='flex  gap-10'>
                            <p>Tags</p>
                            <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#23BE0A]'>{tags[0]}</p>
                            <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#23BE0A]'>{tags[1]}</p>
                        </div>
                        <hr className='-ml-0 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                        <div>
                            <div className="flex gap-10">
                                <p>Number of Pages:</p>
                                <p>{totalPages}</p>
                            </div>
                            <div className="flex gap-10 -mt-5">
                                <p>Publisher:</p>
                                <p>{publisher}</p>
                            </div>
                            <div className="flex gap-10 -mt-5">
                                <p>Year of Publishing:</p>
                                <p>{yearOfPublishing}</p>
                            </div>
                            <div className="flex gap-10 -mt-5">
                                <p>Rating:</p>
                                <p>{rating}</p>
                            </div>

                        </div>
                        <button onClick={handleReadBtn} className="btn  mr-5 ">Read</button>
                        <button onClick={handleWishListBtn} className="btn bg-[#50B1C9] text-[#fff]">WishList</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BooksDetails;