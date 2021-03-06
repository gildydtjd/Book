import React from 'react';
import styled from 'styled-components';
const BookDiv = styled.div`
    width: 300px;
    height: 500px;
    transform: scale(.75);
    transition: all 0.2s linear;
    background-image: url(${props => props.bb});
    background-size: cover;
    background-position: center;
    margin: 20px -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover{
        transform: scale(1);
        margin: 0px -40px;
    }
    `
    
    function Book({bookData}) {
        const {bImg} = bookData;
        return (
        <BookDiv bb={bImg}>
        </BookDiv>
    );
}

export default Book;