import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
const TreeDiv = styled.div`
height: 100%;
width: 100%;
background-image: url("/assets/img/tree.jpg");
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
background-attachment: fixed;
.tree__about{
    height: 100vh;
    width: 100%;
    p{
        margin: 0;
        padding: 100px 100px 62px 100px;
        font-size: 100px;
        color: white;
        font-weight: 700;
        text-shadow: 10px 0 40px mediumorchid;
    }
}
`
function Tree(props) {
    return (
        <TreeDiv>
                <div className="tree__about">
                <p {...useScrollFadeIn("up",1,0.4)}>Tree</p>
                </div>
        </TreeDiv>
    );
}

export default Tree;