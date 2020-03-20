import React, { useState, useEffect } from 'react';
import { Card } from './styledComponents';

const Cards = props => {
  //   console.log(props.data.result);
  console.log(props.name);
  return (
    <div className='cardWrap'>
      {props.name.map(item => {
        return <Card key={item}>Name: {item}</Card>;
      })}
    </div>
  );
};
export default Cards;
