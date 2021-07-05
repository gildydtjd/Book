import React from 'react';
import styled from 'styled-components';

function Tree(props) {
    const TreeDiv = styled.div`
    background-image: url("/assets/img/tree.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
    `
    return (
        <TreeDiv>
        </TreeDiv>
    );
}

export default Tree;