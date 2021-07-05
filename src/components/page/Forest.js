import React from 'react';
import styled from 'styled-components';

function Forest(props) {
    const ForestDiv = styled.div`
    background-image: url("/assets/img/forest.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
    `
    return (
        <ForestDiv>
        </ForestDiv>
    );
}

export default Forest;