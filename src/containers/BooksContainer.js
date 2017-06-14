import { connect } from "react-redux";
import { createBook } from "../actions";
import Books from "../components/Books";

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createBook: book => {
      dispatch(createBook(book));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
