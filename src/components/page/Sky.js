import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
const SkyDiv = styled.div`
    height: 100%;
    width: 100%;
    background-image: url("/assets/img/sky.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
    .sky__about{
        height: 100vh;
        width: 100%;
        p{
            margin: 0;
            padding: 100px 100px 62px 100px;
            font-size: 100px;
            color: white;
            font-weight: 700;
            text-shadow: 10px 0 40px cadetblue;
        }
    }
    `
function Sky(props) {
    return (
        <SkyDiv>
                <div className="sky__about">
                <p {...useScrollFadeIn("up",1,0.4)}>Sky</p>
                </div>
        </SkyDiv>
    );
}

export default Sky;