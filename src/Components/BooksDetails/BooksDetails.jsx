import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBook } from "../../Utility/LocalStorage";
import { saveWishListBook } from "../../Utility/LocalStorageForWishList";


const BooksDetails = () => {
    const Books = useLoaderData();

    const { id } = useParams();
    const targetBook = Books.find(book => book.bookId == id)
    console.log(targetBook.bookId, id)
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = targetBook;
    const handleReadBtn=()=>{
        saveReadBook(bookId)
    }

    const handleWishListBtn=()=>{
        saveWishListBook(bookId)
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
                        <hr />
                        <h1 className="p-1 rounded-lg text-base font-medium text-[#424242] -mt-2">{category}</h1>
                        <hr />
                        <p className="py-6"><span className="font-bold">Review: </span> {review}</p>
                        <div className='flex  gap-10'>
                            <p>Tags</p>
                            <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#23BE0A]'>{tags[0]}</p>
                            <p className='bg-[#F3F3F3] p-1 rounded-lg text-base font-medium text-[#23BE0A]'>{tags[1]}</p>
                        </div>
                        <hr />
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
        </div>
    );
};

export default BooksDetails;