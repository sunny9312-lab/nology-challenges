import React from 'react';
import FlexWrap from '../FlexWrap';
import SimpleCard from '../SimpleCard/SimpleCard';

export const JokesList = ({ jokes }) => {
  return (
    <FlexWrap>
      {jokes.map((joke) => (
        <SimpleCard key={joke.id}>{joke.joke}</SimpleCard>
      ))}
    </FlexWrap>
  );
};
