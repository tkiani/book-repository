import React, { Component } from 'react'
import ReactTable from 'react-table'
import apis from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ff0000;
    cursor: pointer;
`

    class UpdateBook extends Component {
        updateBook = event => {
            event.preventDefault()
            window.location.href = `/books/update/${this.props.id}`
        }
    
        render() {
            return <Update onClick={this.updateBook}>Update Book</Update>
        }
}

class BookUpdateDisplay
 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await apis.getAllBooks().then(books => {
            this.setState({
                books: books.data.data,
                isLoading: false,
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
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateBook id={props.original._id} />
                        </span>
                    )
                },
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

export default BookUpdateDisplay
