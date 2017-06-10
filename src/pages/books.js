import React, {Component} from "react";
import PropTypes from "prop-types";
import Link from "next/link";

class BooksPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // added this so next.js wouldn't throw "getInitialProps" error
  }

  render() {
    // test array for map function
    const books = [
      {
        title: "Sweet Book",
        author: "Dude Duderson",
        category: "Non-fiction"
      },
      {
        title: "Sweet Book",
        author: "Dude Duderson",
        category: "Non-fiction"
      }
    ];
    // map over books array. will pass to component via props
    const bookList = books.map((book, index) => {
      return (
        <ul key={index}>
          <li><strong>Title:</strong> {book.title}</li>
          <li><strong>Author:</strong> {book.author}</li>
          <li><strong>Category:</strong> {book.category}</li>
          {/* need to configure url to generate unique title for detail page */}
          <Link href="/books/:title">
            <a>More info</a>
          </Link>
          <br />
          <button>Delete</button>
        </ul>
      );
    });
    return (
      <div>
        {bookList}
      </div>
    );
  }
}

// prop types
BooksPage.propTypes = {
  books: PropTypes.array.isRequired
};

export default BooksPage;
