const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Book = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        genre: { type: String, required: true },
        rating: { type: Number, required: false },
        review: { type: String, required: false },
    }
)

module.exports = mongoose.model('books', Book)
