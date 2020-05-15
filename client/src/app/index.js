import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { BooksDisplay, BooksList, BookInsert, BookUpdate, BookDelete, BookReview, BookUpdateDisplay, BookReviewDisplay, BookSearch, GenreDisplay, BookGenre} from '../pages'

import Register from "../auth/register";
import Login from "../auth/login";

import { Provider } from "react-redux";
import store from "../store";


import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Provider store={store}>
        <Router>
            <NavBar />
            <Switch>
                <Route path="/books/display" exact component={BooksDisplay} />
                <Route path="/books/list" exact component={BooksList} />
                <Route path="/books/create" exact component={BookInsert} />
                <Route path="/books/update/:id" exact component={BookUpdate} />
                <Route path="/books/updateDisplay" exact component={BookUpdateDisplay} />
                <Route path="/books/delete" exact component={BookDelete} />
                <Route path="/books/review/:id" exact component={BookReview} />
                <Route path="/books/reviewDisplay" exact component={BookReviewDisplay} />
                <Route path="/books/search" exact component={BookSearch} />
                <Route path="/books/list" exact component={BooksList} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />    
                <Route path="/books/genreDisplay" exact component={GenreDisplay} />
                <Route path="/books/genre/:id" exact component={BookGenre} />
            </Switch>
        </Router>
        </Provider>
    )
}

export default App
