import React, {Component} from "react";
import Link from "next/link";
import PropTypes from "prop-types";

class Books extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    // map over books array. will pass to component via props
    const bookList = this.props.books.map((book, index) => {
      return (
        <ul key={index}>
          <li><strong>Title:</strong> {book.title}</li>
          <li><strong>Author:</strong> {book.author}</li>
          <li><strong>Category:</strong> {book.category}</li>
          {/* @TODO: configure url to generate unique title for detail page */}
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
        <Link href="/submit">
          <a>Add New Book</a>
        </Link>
      </div>
    );
  }
}

Books.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Books;
