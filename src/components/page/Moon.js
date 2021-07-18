import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
const MoonDiv = styled.div`
    height: 100%;
    width: 100%;
    background-image: url("/assets/img/Moon.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
    .moon__about{
        height: 100vh;
        width: 100%;
        p{
            margin: 0;
            padding: 100px 100px 62px 100px;
            font-size: 100px;
            color: white;
            font-weight: 700;
            text-shadow: 10px 0 40px #9ecaed;
        }
    }
    `
function Moon(props) {
    const [userData, setUserData] = useState([]);
    const [number, setNumber] = useState("1");

    useEffect(()=>{
        async function rsData() {
            await axios.get("https://jsonplaceholder.typicode.com/users").then((data)=>{
                console.log(data.data);
                setUserData(data.data);
                setNumber();
            })
        }
        rsData();
    },[number]);
    
    const renderData = userData.map((data)=>{
        return( <div key={data.id}>{data.name}</div>)
    })
    return (
        <MoonDiv>
            <div className="moon__about">
                <p {...useScrollFadeIn("up",1,0.4)}>Moon</p>
                {renderData}
            </div>
        </MoonDiv>
    );
}

export default Moon;