import React, { useState, useEffect } from 'react';
import { Card } from './styledComponents';

const Cards = props => {
  //   console.log(props.data.result);
  //   props.name.map(i => {
  //     console.log(i);
  //   });
  console.log(props.name.length);
  console.log(props[0]);
  return (
    <div className='cardWrap'>
      {props.name.map(item => {
        return console.log({ item });
      })}
      <Card>Hello World {props.name[1]}</Card>
    </div>
  );
};
export default Cards;
