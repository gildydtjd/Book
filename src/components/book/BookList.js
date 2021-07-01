import React from 'react';
import styled from 'styled-components';
import Book from './Book';

function BookList(props) {
    const BookList = styled.div`
    width: 100%;
    height: 80vh;
    margin : 10vh 0vh;
    background-color: #c9c9c9;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
    const bookData = [
      {
      no : 1,
      name : "Forest",
      about : "Forest"  
      },
      {
        no : 2,
        name : "Forest",
        about : "Forest"  
      },
      {
        no : 3,
        name : "Forest",
        about : "Forest"  
      },
      {
        no : 4,
        name : "Forest",
        about : "Forest"  
      },
      {
        no : 5,
        name : "Forest",
        about : "Forest"  
      },
      {
        no : 6,
        name : "Forest",
        about : "Forest"  
      },
      ];

      const bookRender = bookData.map((data, key)=>{
          return (<Book bookData={data} key={key}/>)
      });
    return (
        <BookList>
            {bookRender}
        </BookList>
    );
}

export default BookList;