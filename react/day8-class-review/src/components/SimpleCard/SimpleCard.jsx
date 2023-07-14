import React, { Children } from 'react';

const SimpleCard = ({ children }) => {
  return (
    <div style={{ width: '200px', border: '1px solid white' }}>{children}</div>
  );
};

export default SimpleCard;
