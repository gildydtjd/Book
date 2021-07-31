import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
const MoonDiv = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('/assets/img/Moon.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
  .moon__about {
    height: 100vh;
    width: 100%;
    p {
      margin: 0;
      padding: 100px 100px 62px 100px;
      font-size: 100px;
      color: white;
      font-weight: 700;
      text-shadow: 10px 0 40px #9ecaed;
    }
  }
`;
function Moon(props) {
  return (
    <MoonDiv>
      <div className="moon__about">
        <p {...useScrollFadeIn('up', 1, 0.4)}>Moon</p>
      </div>
    </MoonDiv>
  );
}

export default Moon;
