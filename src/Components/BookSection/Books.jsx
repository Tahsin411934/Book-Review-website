import { useEffect, useState } from "react";
import Book from "./Book";


const Books = () => {
    const [books, setBooks] = useState([]);
//fetch Data
    useEffect(() => {
        fetch('BooksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="container mx-auto text-center">
            <h1 className="mt-8">Books</h1>
            <div className="lg:grid grid-cols-3 gap-3 mx-auto">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;