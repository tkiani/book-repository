import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/books/display" className="navbar-brand">
                    Books Depot
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/books/list" className="nav-link">
                                Book Inventory
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/books/create" className="nav-link">
                                Add New Book
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/books/updateDisplay" className="nav-link">
                                Update Book
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/books/delete" className="nav-link">
                                Delete Book 
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/books/reviewDisplay" className="nav-link">
                                Write Reviews
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/books/genreDisplay" className="nav-link">
                                View Books By Genre
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/books/search" className="nav-link">
                                Search Books
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/register" className="nav-link">
                                Register
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
