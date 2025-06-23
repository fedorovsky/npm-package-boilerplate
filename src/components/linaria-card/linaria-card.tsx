import * as React from 'react';
import { styled } from '@linaria/react';

const Title = styled.h1<{ color: string }>`
  font-size: 24px;
  color: ${(props) => props.color};
`;

export const LinariaCard = () => {
  return (
    <div className="card">
      <Title color="red">Card Title</Title>
      <p>This is a simple card component.</p>
    </div>
  );
};
