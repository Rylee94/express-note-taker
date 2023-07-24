const express = require("express");
const path = require("path");
const { allNotes, createNewNote, deleteNote } = require("./functions");

const router = express.Router();

router.get("/api/notes", (req, res) => {
  res.json(allNotes.slice(1));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

router.post("/api/notes", (req, res) => {
  const newNote = createNewNote(req.body, allNotes);
  res.json(newNote);
});

router.delete("/api/notes/:id", (req, res) => {
  deleteNote(req.params.id, allNotes);
  res.json(true);
});

module.exports = router;
