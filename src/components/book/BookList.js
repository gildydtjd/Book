import React from 'react';
import styled from 'styled-components';
import Book from './Book';
import { Link } from 'react-router-dom';
const BookListDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: darkred;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
    const bookData = [
      {
        no : 1,
        name : "Moon",
        url : "/BookList/Moon",
        about : "Forest",
        bImg : "/assets/img/moon.jpg",
      },
      {
        no : 2,
        name : "Forest",
        url : "/BookList/Forest",
        about : "Forest",
        bImg : "/assets/img/forest.jpg",
        },
      
      {
        no : 3,
        name : "Tree",
        url : "/BookList/Tree",
        about : "Forest",
        bImg : "/assets/img/tree.jpg",
      },
      {
        no : 4,
        name : "Sky",
        url : "/BookList/Sky",
        about : "Forest",
        bImg : "/assets/img/sky.jpg",
      },
      {
        no : 5,
        name : "Sea",
        url : "/BookList/Sea",
        about : "Forest",
        bImg : "/assets/img/sea.jpg",
      },
      {
        no : 6,
        name : "Reed",
        url : "/BookList/Reed",
        about : "Forest",
        bImg : "/assets/img/reed.jpg",
      },
      ];

function BookList(props) {
      const bookRender = bookData.map((data, key)=>{
          return (<Link to={data.url}><Book bookData={data} key={key}/></Link>)
      });
    return (
        <BookListDiv>
            {bookRender}
        </BookListDiv>
    );
}

export default BookList;