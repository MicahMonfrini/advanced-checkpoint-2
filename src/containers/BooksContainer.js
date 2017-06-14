import { connect } from "react-redux";
import Books from "../components/Books";

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps, null)(Books);
