var express = require('express');
const Book = require('../models/Book');
var router = express.Router();
const Comment = require('../models/Comment');

/* GET users listing. */
router.get('/api/books', (req, res, next) => {
  Book.find({}, (err, book) => {
    console.log(err, book);
    if (err) return next(err);
    res.json('listBooks');
  });
});

router.get('/api/books/:id', (req, res, next) => {
  var id = req.params.id;
  Book.findById(id)
    .populate('comments')
    .exec((err, book) => {
      if (err) return next(err);
      console.log(book);
      res.json('singleArticle');
    });
});

router.post('/api/books', (req, res, next) => {
  req.body.tags = req.body.tags.trim().split(' ');
  Book.create(req.body, (err, book) => {
    if (err) return next(err);
    res.redirect('/api/books');
  });
});

router.put('/api/books/:id', (req, res, next) => {
  var id = req.params.id;
  Book.findByIdAndUpdate(id, req.body, (err, book) => {
    if (err) return next(err);
    res.redirect('/api/books');
  });
});

router.delete('/api/books/:id', (req, res, next) => {
  var id = req.params.id;
  Book.findByIdAndDelete(id, (err, book) => {
    if (err) return next(err);
    Comment.remove({ bookId: book.id }, (err) => {
      if (err) return next(err);
      res.redirect('/api/books');
    });
  });
});
module.exports = router;
