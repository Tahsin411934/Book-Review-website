import pic from "../../assets/profile1.png"
import { IoDocumentText } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Review = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.review.value)
        console.log(e.target.book.value)
        const review = document.getElementById('review');
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement("p");
        const pR = document.createElement("p");
        h4.classList = 'pl-[3%] text-xl -mb-2';
        div.classList="bg-white w-[90%] mx-auto rounded-xl p-1 mt-3";
        p.className = "pl-[10%]";
       pR.className = "pl-[70%] text-xl";

       h4.innerText = `Book: ${e.target.book.value}`;
       p.innerText = `${e.target.review.value}`;
       pR.innerText = `.......... ${e.target.name.value}`;

        review.appendChild(div);
        div.appendChild(h4);
        div.appendChild(p);
        div.appendChild(pR);
        
        e.target.reset();
        toast.success("SuccessFully Added Review!");
        
    }

    return (
        <>
            <div className="text-center  -mt-4  ">
                <h1 className="text-[#13132e]">In-depth Analysis: Verified Reviews</h1>
            </div>
            <div className="container mx-auto  bg-slate-200 rounded-xl  ">
                <h1 className="text-base text-center text-[#3b3a3a] font-normal w-[70%] mx-auto pt-10">From Detailed Critiques to Quick Summaries, Find the Perfect Reviews for Your Reading Preferences and Enjoy Literary Adventures.</h1>
                <div className="pt-10 ">
                    <form className="w-[100%] shadow-xl lg:pb-16 rounded-xl " onSubmit={handleSubmit}>
                        <div className=" w-[80%]  h-24 input-bordered gap-14  lg:grid grid-cols-2 ">
                            <label className="input mb-3 lg:mb-0 w-[80%] ml-14 h-16 input-bordered flex items-center  bg-white">

                                <input name="name" required type="text" className="h-20 text-base grow border-none text-[#342844]" placeholder="Write Your Name...." />

                            </label>
                            <div className="w-[95%] mx-[14%]">
                                <select name="book" required className="  select w-[100%] h-16 bg-white text-[#291b3d]">
                                    <option disabled selected className="hidden">Pick one Book</option>
                                    <option>George Orwell</option>
                                    <option>To Kill a Mockingbird</option>
                                    <option>The Great Gatsby</option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>
                            </div>

                        </div>

                        <label className=" relative mt-14 lg:mt-0 input  lg:w-[80%] m-[5%] lg:ml-14 h-24 input-bordered flex items-center gap-2 bg-white">
                            <img className="h-20 w-20" src={pic} alt="" />
                            <input name="review"  type="text" className="h-20 text-xl grow border-none text-[#2B1B42]" placeholder="Write Your review...." />
                            <input required className="absolute left-32 lg:static top-24  btn border-none" value="Submit" type="submit" />
                        </label>
                                    <div className="pb-10 lg:pb-0"></div>
                    </form>

                    <div className="pt-10">

                        <a href="#_" className="lg:ml-[2%] font-semibold no-underline inline-flex items-center justify-center px-4 py-2 text-base leading-6 text-white whitespace-no-wrap bg-[#59C6D2]  rounded-md shadow-sm" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset={{}}>
                            <IoDocumentText /> &nbsp; All Review
                        </a>

                        <a href="#_" className="lg:ml-[5%] font-semibold no-underline inline-flex items-center justify-center px-4 py-2 text-base leading-6 text-white whitespace-no-wrap bg-[#59C6D2]  rounded-md shadow-sm" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset={{}}>
                            <IoPerson /> &nbsp;  My Review
                        </a>

                    </div>
                    <div id="review" className="pb-10 ">
                        <div className="bg-white w-[90%] mx-auto rounded-xl p-1 mt-3">
                            <h4 className="pl-[3%] text-xl -mb-2">Book: The Silent Waters <span className="pl-[40%] text-slate-400">Example review</span> </h4>
                            <p className="pl-[10%]">Riveting from start to finish, The Silent Waters by Brittainy C. Cherry intricately weaves a tale of love, loss, and redemption. The characters are flawlessly crafted, each with their own vulnerabilities and strengths that draw you into their world. Cherrys prose is emotive and lyrical, capturing the raw emotions of her characters with striking authenticity. As the story unfolds, themes of forgiveness and second chances resonate profoundly. The narratives depth and complexity make it a truly captivating read, leaving a lasting impression on the readers heart. The Silent Waters is a poignant masterpiece that will linger in your thoughts long after the final page.</p>
                            <p className="pl-[70%] text-xl">......Abrar Fahim</p>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div> </>
    );
};

export default Review;