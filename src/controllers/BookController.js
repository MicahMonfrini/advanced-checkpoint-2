import Book from "../models/Book";

// @FIXME: remove disabling of rules
/* eslint-disable no-unused-vars */

const BookController = {
  list: (req, res, next) => {
    console.log("List view is working");
    return res.json("Works");
  },
  show: (req, res, next) => {
    console.log("Detail view is working");
    return res.json("Works");
  },
  create: (req, res, next) => {
    const book = new Book(req.body);

    book.save()
      .then(savedBook => {
        return res.json(savedBook);
      })
      .catch(err => {
        next(err);
      });
    
    return res.json();
  },
  delete: (req, res, next) => {
    console.log("Delete view is working");
    return res.json("Works");
  },
  update: (req, res, next) => {
    console.log("Update view is working");
    return res.json("Works");
  }
};

export default BookController;
