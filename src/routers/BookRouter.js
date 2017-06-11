import express from "express";
import BookController from "../controllers/BookController";

const router = express.Router();
// @FIXME: remove disabling of rules
/* eslint-disable no-unused-vars */

// Lists all books

router.get("/api/books", BookController.list);

// Shows single book

router.get("/api/books/:id", BookController.show);

// Creates single book

router.post("/api/books/:id", BookController.create);

// Deletes single book

router.delete("/api/books/:id", BookController.delete);

// Updates single book

router.put("/api/books/:id", BookController.update);

export default router;
