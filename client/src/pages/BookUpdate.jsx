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

class BookUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            author: '',
            genre: '',
            rating: '',
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


    handleUpdateBook = async () => {
        const { id, title, author, genre, rating} = this.state
        const payload = {title, author, genre, rating}

        await api.updateBookById(id, payload).then(res => {
            window.alert(`Book successfully updated. `)
            this.setState({
                title: '',
                author: '',
                genre: '',
                rating: '',
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
        })
    }

    render() {
        const { title, author, genre, rating} = this.state
        return (
            <Wrapper>
            <Title>Update Book</Title>

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


                <Button onClick={this.handleUpdateBook}>Update Book</Button>
                <CancelButton href={'/books/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default BookUpdate
