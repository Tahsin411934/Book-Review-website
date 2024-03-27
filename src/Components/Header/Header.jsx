import { NavLink } from "react-router-dom";
import '../../../src/Styles/Header.css'

const Header = () => {
    const navLink = <>
        <NavLink className="ml-7 p-2 text-lg font-normal text-[#131313CC] border-none no-underline" to="/" ><li>Home</li></NavLink>
        <NavLink className="ml-7 p-2 text-lg font-normal text-[#131313CC] border-none no-underline" to="/listedBook"><li>Listed Book</li></NavLink>
        <NavLink className="ml-7 p-2 text-lg font-normal text-[#131313CC] border-none no-underline" to="/pageToRead"><li>Pages To Read</li></NavLink>
        <NavLink className="ml-7 p-2 text-lg font-normal text-[#131313CC] border-none no-underline" to="/review"><li>Review</li></NavLink>
    </>
    return (
        <div className="WorkSansFont container mx-auto w-[95%]">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                            <a href="#_" className="lg:hidden ml-5 font-semibold no-underline inline-flex items-center justify-center px-4 py-2 text-base leading-6 text-white whitespace-no-wrap bg-[#23BE0A]  rounded-md shadow-sm" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset={{}}>
                                Sign In
                            </a>
                        </ul>
                    </div>
                    <a className="btn text-2xl font-bold text-[#131313]">Narrative Nook</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">

                    <a href="#_" className=" hidden ml-5 font-semibold no-underline lg:inline-flex items-center justify-center px-4 py-2 text-base leading-6 text-white whitespace-no-wrap bg-[#23BE0A]  rounded-md shadow-sm" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset={{}}>
                        Sign In
                    </a>

                    <a href="#_" className="lg:ml-5 font-semibold no-underline inline-flex items-center justify-center px-4 py-2 text-base leading-6 text-white whitespace-no-wrap bg-[#59C6D2]  rounded-md shadow-sm" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset={{}}>
                        Sign Up
                    </a>
                </div>

            </div>


        </div>
    );
};

export default Header;