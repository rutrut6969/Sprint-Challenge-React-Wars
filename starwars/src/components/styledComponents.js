import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.section`
  // background-color: rgba(211, 211, 211, 0.7);
  height: 30vh;
  width: 90%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;

export const AppStyle = styled.div`
  /* background-image: url('./sw-bg.jpg'); */
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  //   z-index: -1;
`;

export const Card = styled.ul`
  background-color: rgba(211, 211, 211, 0.75);
  height: 200px;
  width: 30%;
  border-radius: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 2px 2px 5px rgba(210, 188, 167, 0.9);
`;

export const Title = styled.h2`
  color: black;
  font-size: 1rem;
  padding-top: 2%;
  width: 95%;
  padding-bottom: 2%;
  border-bottom: 1px solid darkgray;
`;
export const CardAttrs = styled.li`
  color: black;
  margin-left: 2%;
`;
export const CardBody = styled.p`
  color: red;
`;

export const CardWrap = styled.div`
  width: 95%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;
