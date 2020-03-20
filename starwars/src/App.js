import React, { useState, useEffect } from 'react';
import './App.css';
import { Wrapper, AppStyle } from './components/styledComponents';
import Cards from './components/Card';
import axios from 'axios';
// import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [names, setNames] = useState([]);
  const [data, setData] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response);
        // console.log(response.data.results.name);
        setNames(response.data.results);
        console.log(response.data.results.starships);
        // console.log(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <AppStyle className='App'>
      <h1 className='Header'>React Wars</h1>
      <Wrapper className='wrapper'>
        {/* Contained Components in here: */}
        <Cards names={names}></Cards>
      </Wrapper>
    </AppStyle>
  );
};
export default App;
