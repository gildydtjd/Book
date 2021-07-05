import React from 'react';
import styled from 'styled-components';

function Sea(props) {
    const SeaDiv = styled.div`
    background-image: url("/assets/img/sea.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
    `
    return (
        <SeaDiv>
        </SeaDiv>
    );
}

export default Sea;