import * as React from 'react';
import { css } from '@pigment-css/react';

const button = css({
  border: '1px solid blue',
});

export const PigmentButton = () => {
  return <button className={button}>Pigment Button</button>;
};
