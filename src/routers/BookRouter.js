import express from "express";

const router = express.Router();
// @FIXME: remove disabling of rules
/* eslint-disable no-unused-vars */

// Lists all books

router.get("/api/books", (req, res, next) => {
  console.log("List view is working");
  return res.json("Works");
});

// Returns single book

router.get("/api/books/:id", (req, res, next) => {
  console.log("Detail view is working");
  return res.json("Works");
});

// Adds single book

router.post("/api/books/:id", (req, res, next) => {
  console.log("Post view is working");
  return res.json("Works");
});

// Deletes single book

router.delete("/api/books/:id", (req, res, next) => {
  console.log("Delete view is working");
  return res.json("Works");
});

// Updates single book

router.put("/api/books/:id", (req, res, next) => {
  console.log("Update view is working");
  return res.json("Works");
});

export default router;
