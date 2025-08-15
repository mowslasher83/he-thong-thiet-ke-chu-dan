import React from 'react';

export const Button = ({ variant, children }) => {
  return <button className={`btn btn-${variant}`}>{children}</button>;
};
