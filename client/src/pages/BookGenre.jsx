import React, { Component } from 'react'
import api from '../api'
import ReactTable from 'react-table'

import styled from 'styled-components'

const axios = require("axios");


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

class BookGenre extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            books: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        const {id} = this.state
       
        this.setState({ isLoading: true })

        console.log("inside problem");
        console.log(id);

       await api.getBooksByGenre(id).then(books => {
        this.setState({
            books: books.data.data,
            isLoading: false
         })
        })
    }
   

    render() {
        const { books, isLoading } = this.state

        const columns = [
            {
                Header: 'IBN',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Title',
                accessor: 'title',
                filterable: true,
            },
            {
                Header: 'Author',
                accessor: 'author',
                filterable: true,
            },
            {
                Header: 'Genre',
                accessor: 'genre',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Reviews',
                accessor: 'review',
                filterable: true,
            },
        ]
        let showTable = true
        if (!books.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={books}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default BookGenre
