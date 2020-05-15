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

class BookInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputAuthor = async event => {
        const author = event.target.value
        this.setState({ author })
    }

    handleChangeInputGenre = async event => {
        const genre = event.target.value
        this.setState({ genre})
    }

    handleIncludeBook = async () => {
        const { title, author, genre, rating  } = this.state
        const payload = { title, author, genre, rating }

        await api.insertBook(payload).then(res => {
            window.alert(`Books successfully added to inventory`)
            this.setState({
                title: '',
                author: '',
                genre: '',
                rating: '',
            })
        })
    }

    render() {
        const { title, author, genre, rating  } = this.state
        return (
            <Wrapper>
                <Title>Add New Book To Inventory</Title>

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

                <Button onClick={this.handleIncludeBook}>Add Book</Button>
                <CancelButton href={'/books/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default BookInsert
