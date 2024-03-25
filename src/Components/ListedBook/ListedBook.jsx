const ListedBook = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center p-1 rounded-xl" style={{ backgroundColor: 'rgba(19, 19, 19, 0.05)' }}>
                <h1>Books</h1>
            </div>
            <div className="flex items-center justify-center mt-10 ">
            <select className="select select-primary w-full-sm max-w-xs bg-[#23BE0A] text-[#fff] m-auto">
                <option disabled selected>sort by</option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
            </select>
            </div>
        </div>
    );
};

export default ListedBook;
