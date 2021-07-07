import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

function Forest(props) {
    const ForestDiv = styled.div`
    height: 100%;
    width: 100%;
    background-image: url("/assets/img/forest.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
    .forest__about{
        height: 100vh;
        width: 100%;
        p{
            margin: 0;
            padding: 100px 100px 62px 100px;
            font-size: 100px;
            color: white;
            font-weight: 700;
            text-shadow: 10px 0 40px green;
        }
    }
   
    `
    return (
        <ForestDiv>
            <div className="forest__about">
                <p {...useScrollFadeIn("up",1,0.4)}>Forest</p>
                </div>
        </ForestDiv>
    );
}

export default Forest;