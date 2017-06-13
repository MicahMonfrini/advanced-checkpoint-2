import React, {Component} from "react";

class SubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "",
      authorText: "",
      dateText: "",
      publisherText: "",
      categoryText: ""
    };
  }

  componentDidMount() {
    // added this so next.js wouldn't throw "getInitialProps" error
  }

  mapDispatchToProps() {
    // @TODO: create/import createBook action
    return {
      createBook: dispatch => {
        dispatch(createBook(book));
      }
    };
  }

  render() {
    return (
      <div>
        <form
          onSubmit = {() => {
            this.props.createBook();
          }}>
          <p>
            Title:
              <input
                type="text"
                name="title"
                value={this.state.titleText}
                onChange={ event => {
                  this.setState({
                    titleText: event.target.value
                  });
                }}
              />
          </p>
          <p>
            Author:
              <input
                type="text"
                name="author"
                value={this.state.authorText}
                onChange={ event => {
                  this.setState({
                    authorText: event.target.value
                  });
                }}
              />
          </p>
          <p>
            Date:
              <input
                type="text"
                name="date"
                value={this.state.dateText}
                onChange={ event => {
                  this.setState({
                    dateText: event.target.value
                  });
                }}
              />
          </p>
          <p>
            Publisher:
              <input
                type="text"
                name="publisher"
                value={this.state.publisherText}
                onChange={ event => {
                  this.setState({
                    publisherText: event.target.value
                  });
                }}
              />
          </p>
          <p>
            Category:
              <input
                type="text"
                name="category"
                value={this.state.categoryText}
                onChange={ event => {
                  this.setState({
                    categoryText: event.target.value
                  });
                }}
              />
          </p>
           <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SubmitPage;
