import React from 'react';
import styled from 'styled-components';

function Moon(props) {
    const MoonDiv = styled.div`
    background-image: url("/assets/img/Moon.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
    `
    return (
        <MoonDiv>
        </MoonDiv>
    );
}

export default Moon;