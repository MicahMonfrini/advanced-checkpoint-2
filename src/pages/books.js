import React, {Component} from "react";
import PropTypes from "prop-types";

class BooksPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div></div>
    );
  }
}

BooksPage.propTypes = {
  books: PropTypes.array.isRequired
};

export default BooksPage;


// const bookList = this.props.books.map((user, index) => {
//   return
// })
