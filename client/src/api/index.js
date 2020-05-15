import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertBook = payload => api.post(`/book`, payload)
export const getAllBooks = () => api.get(`/books`)
export const addReview = (id, payload) => api.put(`/books/${id}`, payload)
export const updateBookById = (id, payload) => api.put(`/book/${id}`, payload)
export const deleteBookById = id => api.delete(`/book/${id}`)
export const getBookById = id => api.get(`/book/${id}`)
export const getBooksByGenre = id => api.get(`/genre/${id}`)

const apis = {
    insertBook,
    getAllBooks,
    addReview,
    updateBookById,
    deleteBookById,
    getBookById,
    getBooksByGenre,
}

export default apis
