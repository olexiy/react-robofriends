import React from 'react';

// eslint-disable-next-line react/prop-types
const Scroll = ({ children }) => (
  <div style={{ overflowY: 'scroll', border: '1px solid black', height: '750px' }}>
    {children}
  </div>
);

export default Scroll;
