import * as React from 'react';
import { css, styled } from '@pigment-css/react';

const button = css({
  border: '1px solid blue',
  fontSize: '16px',
});

const Heading = styled('div')({
  fontSize: '2rem',
  color: 'var(--colors-primary)',
  fontWeight: 'bold',
  margin: '1rem',
});

export const PigmentButton = () => {
  return (
    <button className={button}>
      Pigment Button<Heading>Hello</Heading>
    </button>
  );
};
