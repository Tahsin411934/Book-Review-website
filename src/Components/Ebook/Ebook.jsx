import { useLoaderData } from "react-router-dom";
import EbookSingleItem from "./EbookSingleItem";
import { useState } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Ebook = () => {
    const ebooks = useLoaderData()

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState([])
    const [title, setTitle] = useState([])

    const AddToCart = (bookId, bookName, price) => {
        const dam = parseInt(price)
        const find = cart.find(item => item == bookId);
        console.log(!find);
        if (!find) {
            setCart([...cart, bookId]);
            setTotalPrice([...totalPrice, dam]);
            setTitle([...title, bookName])
        } else {
            toast("This Book Already Added To Cart!")
        }


    }
    function sumTotalPrice(totalPrice) {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            sum += totalPrice[i];
        }
        return sum;
    }
    const total = sumTotalPrice(totalPrice)

    return (
        <>




            <dialog id="my_modal_1" className="modal ">
                <div className="modal-box bg-slate-400">
                    <div className="flex items-center gap-16 text-lg">
                        <div>
                            <p>Book Id</p>
                            {
                                cart.map(c => <h3 key={c} className="font-bold text-lg text-center">{c}</h3>)
                            }
                        </div>
                        <div>
                            <p> Name</p>
                            {
                                title.map(t => <h3 key={t} className="font-bold text-lg">{t}</h3>)
                            }
                        </div>
                        <div>
                            <p> Price</p>
                            {
                                totalPrice.map(tp => <h3 key={tp} className="font-bold text-lg text-center">{tp}</h3>)
                            }
                        </div>
                    </div>
                    <hr className=' mb-2 h-[1px] border-none bg-slate-200 mx-auto w-[80%]' />
                    <div className="flex items-center gap-10 ml-[22%]">
                        <h1>Total Price</h1>
                        <h1>{total}</h1>
                    </div>

                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className="flex ml-[48%]">
                <button className="btn border-none" onClick={() => document.getElementById('my_modal_1').showModal()}>< PiShoppingCart size={42} /> <h1 className="mt-7 -ml-3 text-[#CC3333]">{cart.length}</h1></button>


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