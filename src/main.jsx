import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import ListedBook from './Components/ListedBook/ListedBook';
import BooksDetails from './Components/BooksDetails/BooksDetails';

import PageToRead from './Components/PageToRead/PageToRead';
import Review from './Components/Review/Review';
import Ebook from './Components/Ebook/Ebook';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
     
      {
        path: "/listedBook",
        loader: ()=> fetch('/BooksData.json'),
        element: <ListedBook></ListedBook>,
        
      },
      {
        path: "/pageToRead",
       element: <PageToRead></PageToRead>,
       loader: ()=> fetch('/BooksData.json'),
      },
      {
        path: "/bookDetails/:id",
        element: <BooksDetails></BooksDetails>,
        loader: ()=> fetch('/BooksData.json'),
      },
      {
        path:"/review",
        element: <Review></Review>
      },
      {
        path:"/ebook",
        element: <Ebook></Ebook>,
        loader:()=> fetch('/ebooks.json')
      },
     
     
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
