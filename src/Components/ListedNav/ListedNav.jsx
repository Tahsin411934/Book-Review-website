import { NavLink } from "react-router-dom";

<style>
.active{
    'background-color: blue'
}
</style>
const ListedNav = () => {
    
    return (
        <div className="flex gap-12">
            <NavLink to={"/listedBook/h"}>Read Books</NavLink>
            <NavLink to={"/listedBook/wishlistBooks"}>Wishlist Books</NavLink>
        </div>
    );
};

export default ListedNav;