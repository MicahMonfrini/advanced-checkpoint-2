import React, {Component} from "react";
import { initStore } from "../store";
import withRedux from "next-redux-wrapper";
import BooksContainer from "../containers/BooksContainer";

class BooksPage extends Component {
  render() {
    return (
      <div>
        <BooksContainer />
      </div>
    );
  }
}

export default withRedux(initStore, null, null)(BooksPage);
