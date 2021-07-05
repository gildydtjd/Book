import React from 'react';
import styled from 'styled-components';

function Reed(props) {
    const ReedDiv = styled.div`
    background-image: url("/assets/img/reed.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
    `
    return (
        <ReedDiv>
        </ReedDiv>
    );
}

export default Reed;