const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/", (req, res) => {
    const indexhtmlPath = path.join(__dirname, '..', "public", "index.html");
    res.sendFile(indexhtmlPath);
});

router.get("/notes", (req, res) => {
    const noteshtmlPath = path.join(__dirname, '..', "public", "notes.html");
    res.sendFile(noteshtmlPath);
});

module.exports = router;