import React, { useState, useEffect } from 'react';
import { Card, Title, CardAttrs, CardBody, CardWrap } from './styledComponents';
import axios from 'axios';

const Cards = props => {
  const [starShips, setStarShips] = useState([]);
  props.names.map(item => {
    axios
      .get(item.starships)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  });
  //   console.log(props.names.starships);
  return (
    <CardWrap className='cardWrap'>
      {props.names.map(item => {
        return (
          <Card key={item.name}>
            <Title key={`${item.name} 1`}>Name: {item.name}</Title>
            <CardAttrs key={`${item.name}2`}>Height: {item.height}</CardAttrs>
            <CardAttrs key={`${item.name}3`}>Weight: {item.mass}</CardAttrs>
            <CardAttrs key={`${item.name}4`}>
              Hair Color: {item.hair_color}
            </CardAttrs>
            <CardAttrs key={`${item.name}5`}>
              Skin Color: {item.skin_color}
            </CardAttrs>
            <CardAttrs key={`${item.name}6`}>
              Eye Color: {item.eye_color}
            </CardAttrs>
            <CardAttrs key={`${item.name}7`}>
              Birth Year: {item.birth_year}
            </CardAttrs>
            <CardAttrs key={`${item.name}8`}>Gender: {item.gender}</CardAttrs>
            {/* <CardBody></CardBody> */}
          </Card>
        );
      })}
      {/* <Card>Hello World {props.names[1]}</Card> */}
    </CardWrap>
  );
};
export default Cards;
