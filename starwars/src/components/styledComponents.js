import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.section`
    // background-color: rgba(211, 211, 211, 0.7);
    height: 30vh;
    width 85%;
    display flex;
    justify-content: space-evenly;
`;

export const AppStyle = styled.div`
  // background-image url(./sw-bg.jpg);
  display: flex;
  align-items: center;
  flex-direction: column;
  //   z-index: -1;
`;

export const Card = styled.section`
  background-color: rgba(211, 211, 211, 1);
  height: 100px;
  width: 100px;
  border-radius: 10px;
`;
