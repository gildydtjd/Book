import React from 'react';
import styled from 'styled-components';

function Sky(props) {
    const SkyDiv = styled.div`
    background-image: url("/assets/img/sky.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
    `
    return (
        <SkyDiv>
        </SkyDiv>
    );
}

export default Sky;