import { connect } from "react-redux";
import Books from "../components/Books";
import { loadBooks } from "../actions";

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadBooks: () => {
      dispatch(loadBooks());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
