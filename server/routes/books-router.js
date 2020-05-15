const express = require('express')

const MovieCtrl = require('../controllers/books-ctrl')


const router = express.Router()

router.post('/book', MovieCtrl.createBook)
router.put('/books/:id',  MovieCtrl.reviewBook)
router.put('/book/:id',  MovieCtrl.updateBook)
router.delete('/book/:id',  MovieCtrl.deleteBook)
router.get('/book/:id',  MovieCtrl.getBookById)
router.get('/books',  MovieCtrl.getBooks)
router.get('/genre/:id',  MovieCtrl.getBooksByGenre)

module.exports = router
