import React from "react";
import { initStore } from "../store";
import withRedux from "next-redux-wrapper";

function BookDetail() {
  return (
    <div>
      "A specific book"
    </div>
  );
}

export default withRedux(initStore, null, null)(BookDetail)
