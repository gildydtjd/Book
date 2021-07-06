import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

function Moon(props) {
    const MoonDiv = styled.div`
    height: 100%;
    width: 100%;
    background-image: url("/assets/img/Moon.jpg");
    background-size: cover;
    display: inline-block;
    background-attachment: fixed;
    .moon__about{
        height: 100vh;
        p{
            font-size: 100px;
            color: white;
            font-weight: 700;
        }
    }
    .moon__about2{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .moon__rocket{
        background-image: url("/assets/img/rocket2.png");
        width: 150px;
        height: 250px;
        background-position: center;
        background-size: cover;
    }
        
        .moon__about2__left{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 100vh;
        }
        .moon__about2__right{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 100vh;
        }
    }
    
    `

    return (
        <MoonDiv>
            <div className="moon__about">
                <p {...useScrollFadeIn("up",1,1)}>Moon</p>
            </div>
            <div className="moon__about2">
                <div className="moon__about2__left" {...useScrollFadeIn("up",0.5,1)}>
                <div className="moon__rocket" />
                </div>
                <div className="moon__about2__right"  {...useScrollFadeIn("up",0.5,1)}>
                <div className="moon__rocket" />
                </div>
                </div>
        </MoonDiv>
    );
}

export default Moon;