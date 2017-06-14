import React, {Component} from "react";
import PropTypes from "prop-types";
import Link from "next/link";

class BooksPage extends Component {
  render() {
    // map over books array. will pass to component via props
    // // const bookList = books.map((book, index) => {
    // //   return (
    // //     <ul key={index}>
    // //       <li><strong>Title:</strong> {book.title}</li>
    // //       <li><strong>Author:</strong> {book.author}</li>
    // //       <li><strong>Category:</strong> {book.category}</li>
    // //       {/* @TODO: configure url to generate unique title for detail page */}
    // //       <Link href="/books/:title">
    // //         <a>More info</a>
    // //       </Link>
    // //       <br />
    // //       <button>Delete</button>
    // //     </ul>
    //   );
    // });
    return (
      <div>
        <Link href="/submit">
          <a>Add New Book</a>
        </Link>
      </div>
    );
  }
}

// prop types
BooksPage.propTypes = {
  books: PropTypes.array.isRequired
};

export default BooksPage;
