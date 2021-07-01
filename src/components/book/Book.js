import React from 'react';
import styled from 'styled-components';
const BookDiv = styled.div`
    width: 150px;
    height: 200px;
    border: 2px solid #ffffff;
    background-image: url("/assets/img/forest.jpg");
    background-size: cover;
    background-position: center;
    margin: 20px 40px;
    :hover {
        width: 300px;
        height: 400px;
        transition: all 1s;
    }
    
    `

function Book(bookData) {
    const { no, name, about } = bookData;
    return (
        <BookDiv>
            <h2>{no}</h2>
            <h2>{name}</h2>
            <h2>{about}</h2>
        </BookDiv>
    );
}

export default Book;