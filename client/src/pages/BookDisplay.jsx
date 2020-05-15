import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
text-align: center;
font-family: "Times New Roman", Times, serif;
color:darkslategrey ;
`

const Wrapper = styled.div.attrs({
})``

const Label = styled.label`
    margin-left: 300px;
    margin-right: 300px;
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
    color:darkslategrey ;
`
const Label2 = styled.label`
margin-left: 300px;
text-align: center;
font-size: 20px;
font-family: "Times New Roman", Times, serif;
font-weight: bold;
color:darkslategrey ;
`
const Label3 = styled.label`
font-size: 15px;
font-family: "Times New Roman", Times, serif;
color:darkslategrey ;
`

class BooksDisplay extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Wrapper>
                <Title>Online Book Repository</Title>
                <br />
                <Label>This website is an applicaton of a MERN stack: </Label>
                <br />
        <Label2>M =   </Label2>
        <Label3> MongoDB </Label3>
        <br />
        <Label2>E =   </Label2>
        <Label3> Express </Label3>
        <br />
        <Label2>R =   </Label2>
        <Label3> React </Label3>
        <br />
        <Label2>N =   </Label2>
        <Label3> Node</Label3>
        <br />
        <Label>The website implements basic create, update, read and delete functionality using the above mentioned technologies, alongside using Apis such as axios, mongoose, bootsrap and styled-components to add more flexibility.    </Label>
            </Wrapper>
        )
    }
}

export default BooksDisplay
