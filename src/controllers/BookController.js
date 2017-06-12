import Book from "../models/Book";

// @FIXME: remove disabling of rules
/* eslint-disable no-unused-vars */

const BookController = {
  list: (req, res, next) => {
    Book.find().exec()
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        next(err);
      });
  },
  show: (req, res, next) => {
    Book.findById(req.params.id).exec()
      .then(item => {
        res.json(item);
      })
      .catch(err => {
        next(err);
      });
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
