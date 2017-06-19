import React, {Component} from "react";
import { initStore } from "../store";
import withRedux from "next-redux-wrapper";

class BookDetail extends Component {
  render() {
    return (
      <div>
        "A specific book"
      </div>
    );
  }
}

export default withRedux(initStore, null, null)(BookDetail);
