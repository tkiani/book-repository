const Book = require('../models/books-model')

createBook = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a book',
        })
    }

    const book = new Book(body)

    if (!book) {
        return res.status(400).json({ success: false, error: err })
    }

    book
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: book._id,
                message: 'Book created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Book not created!',
            })
        })
}

updateBook = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Book.findOne({ _id: req.params.id }, (err, book) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Book not found!',
            })
        }
        book.title = body.title
        book.author = body.author
        book.genre = body.genre
        book.rating = body.rating
        book
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: book._id,
                    message: 'Book updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Book not updated!',
                })
            })
    })
}

reviewBook = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Book.findOne({ _id: req.params.id }, (err, book) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Book not found!',
            })
        }
        book.review = body.review
        book
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: book._id,
                    message: 'Review added!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Could not add review!',
                })
            })
    })
}

getBooksByGenre = async (req, res) => {
    await Book.find({ genre: req.params.id }, (err, book) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!book.length) {
            return res
                .status(404)
                .json({ success: false, error: `Book not found` })
        }
        console.log("The returned books are ");
        console.log(book);
        return res.status(200).json({ success: true, data: book })
    }).catch(err => console.log(err))

}


deleteBook = async (req, res) => {
    await Book.findOneAndDelete({ _id: req.params.id }, (err, book) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!book) {
            return res
                .status(404)
                .json({ success: false, error: `Book not found` })
        }

        return res.status(200).json({ success: true, data: book })
    }).catch(err => console.log(err))
 }

getBookById = async (req, res) => {
    await Book.findOne({ _id: req.params.id }, (err, book) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: book })
    }).catch(err => console.log(err))
}

getBooks = async (req, res) => {
    await Book.find({}, (err, book) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!book.length) {
            return res
                .status(404)
                .json({ success: false, error: `Book not found` })
        }
        return res.status(200).json({ success: true, data: book })
    }).catch(err => console.log(err))
}


module.exports = {
    createBook,
    updateBook,
    deleteBook,
    getBooks,
    getBookById,
    reviewBook,
    getBooksByGenre,
}
