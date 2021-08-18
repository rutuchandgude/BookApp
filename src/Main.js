import { useState } from "react";

const allBooks = {
 
  productive: [
    {
      title: "God of Small Things",
      author: "Arundhati Roy",
      rating: "4/5",
      image: "https://images-eu.ssl-images-amazon.com/images/I/41jFJcgRRtL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      title: "Wings of Fire",
      author: " Arun Tiwari ",
      rating: "4.6/5",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/51wbVQTpTgL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      title: "A FINE BALANCE",
      author: "Rohinton Mistry",
      rating: "4/5",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51gni0e+ToL._SX324_BO1,204,203,200_.jpg",
    },
  ],
  Programming: [
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      rating: "4.8/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg",
    },
    {
      title: "Clean Code",
      author: "Robert Cecil Martin",
      rating: "4/5",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX342_SY445_QL70_ML2_.jpg",
    },
    {
      title: "Cracking the Coding Interview (Indian Edition) ",
      author: "Gayle Laakmann McDowell",
      rating: "4.6/5",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg",
    },
  ],
 
  Startup: [
    {
      title: "Zero To One",
      author: "Peter Thiel",
      rating: "4.3/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg",
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      rating: "4/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
    },
    {
      title: "Rework",
      author: "Jason Fried",
      rating: "4.2/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/61GFc+k-5PL.jpg",
    },
  ],
};

const Main = () => {
  const [bookList, setBookList] = useState(allBooks.Programming);

  function categoryClickHandler(e, category) {
    let books = allBooks[category];
    setBookList(books);
  }

  return (
    <div className="main">
      <div className="tab-container">
        {Object.keys(allBooks).map((category, index) => {
          return (
            <button
              className="tab"
              onClick={(e) => categoryClickHandler(e, category)}
              key={index}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="content-container">
        <ul>
          {bookList.map((book) => (
            <li key={book.title} className="card">
              <div className="card-img">
                <img src={book.image} alt="book" />
              </div>
              <div className="card-details">
                <h2> {book.title} </h2>
                <div>{book.author}</div>
                <div>
                  <span className="card-details-rating"> {book.rating} </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
