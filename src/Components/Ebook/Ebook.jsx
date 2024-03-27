import { useLoaderData } from "react-router-dom";
import EbookSingleItem from "./EbookSingleItem";
import { useState } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Ebook = () => {
    const ebooks = useLoaderData()

    const [cart, setCart] = useState([])

    const AddToCart = (bookId) => {
        const find= cart.find(item=>item==bookId);
        console.log(!find);
        !find? setCart([...cart, bookId]):toast("Already Added To Cart!")
        
    }

    return (
        <>
            <div className="flex ml-[48%]">
                < PiShoppingCart size={42} />
                <h1 className="mt-6">{cart.length}</h1>
                <ToastContainer />
            </div>

            <div className="container  lg:grid grid-cols-3 gap-3 mx-auto">
                {
                    ebooks.map(ebook => <EbookSingleItem key={ebook.bookId} ebook={ebook} AddToCart={AddToCart}></EbookSingleItem>)
                }

            </div>
            
        </>
    );
};

export default Ebook;