import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class BookReview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            author: '',
            genre: '',
            rating: '',
            review:'',
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputAuthor = async event => {
        const author = event.target.value
        this.setState({ author })
    }

    handleChangeInputGenre = async event => {
        const genre = event.target.value
        this.setState({ genre })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputReview = async event => {
        const review = event.target.value
        this.setState({ review })
    }

    handleReviewBook = async () => {
        const { id, title, author, genre, rating, review} = this.state
        const payload = {title, author, genre, rating, review}

        await api.addReview(id, payload).then(res => {
            window.alert(`Review successfully added!. `)
            this.setState({
                title: '',
                author: '',
                genre: '',
                rating: '',
                review: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const book = await api.getBookById(id)

        this.setState({
            title: book.data.data.title,
            author: book.data.data.author,
            genre: book.data.data.genre,
            rating: book.data.data.rating,
            review: book.data.data.review,
        })
    }

    render() {
        const { title, author, genre, rating, review} = this.state
        return (
            <Wrapper>
            <Title>Write a review for a book</Title>

            <Label>Title: </Label>
            <InputText
                type="text"
                value={title}
                onChange={this.handleChangeInputTitle}
            />

            <Label>Author: </Label>
            <InputText
                type="text"
                value={author}
                onChange={this.handleChangeInputAuthor}
            />

            <Label>Genre: </Label>
            <InputText
                type="text"
                value={genre}
                onChange={this.handleChangeInputGenre}
            />
            <Label>Rating: </Label>
            <InputText
                type="number"
                step="1"
                lang="en-US"
                min="0"
                max="10"
                pattern="[0-9]+([,\.][0-9]+)?"
                value={rating}
                onChange={this.handleChangeInputRating}
            />
            <Label>Review: </Label>
            <InputText
                type="text"
                maxLength={24}
                value={review}
                onChange={this.handleChangeInputReview}
            />


                <Button onClick={this.handleReviewBook}>Review Book</Button>
                <CancelButton href={'/books/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default BookReview