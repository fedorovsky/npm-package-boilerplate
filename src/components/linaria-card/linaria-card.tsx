import * as React from 'react';
import { styled } from '@linaria/react';

const Title = styled.h1`
  font-size: 24px;
  color: red;
`;

export const LinariaCard = () => {
  return (
    <div className="card">
      <Title>Card Title</Title>
      <p>This is a simple card component.</p>
    </div>
  );
};
