import React, { useState } from 'react'
import ReactDOM from "react-dom"
import api from '../api'
import axios from 'axios'

import styled from 'styled-components'

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const Label = styled.label`
    margin: 5px;
    font-size: 30px;
`

function BookSearch() {

const [book, setBook] = useState("");
const [result, setResult] = useState([]);
const [apiKey, setApiKey] = useState("AIzaSyAVSiqx8hvdooz9slcHMy8cOGSBLFE4gG4");

function handleChange(event){
    const book = event.target.value;
    setBook(book);
}
    
function handleSubmit(event){
    event.preventDefault();
    console.log("inside handle submit");
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book+ "&key=" + apiKey + "&maxResults=40")
    .then(data=>{
        setResult(data.data.items);
    })
}

return (
<div className = "container">
    <Label> Search For Books Using Google API</Label>
<form onSubmit={handleSubmit}>
<div className="form-group">
    <input type="text" onChange={handleChange}
     className="form-control" placeholder="Book Title" autoComplete="off" />
</div>
<Button type="submit" className="btn" >Search</Button>
</form>

{result.map(book=>(
            < a target="_blank" href={book.volumeInfo.previewLink}>
     
     {/* from stackoverflow: https://stackoverflow.com/questions/51692323/google-books-api-cannot-read-property-thumbnail-of-undefined */}
        <img src={
        book.volumeInfo.imageLinks === undefined
        ? ""
        : `${book.volumeInfo.imageLinks.thumbnail}`
        } alt={book.title}/>
            </a>
        ))}
</div>
);

}

const rootElement = document.getElementById("root");
ReactDOM.render(<BookSearch />, rootElement);

export default BookSearch