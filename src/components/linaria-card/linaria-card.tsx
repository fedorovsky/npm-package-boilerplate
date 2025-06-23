import * as React from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { lightTheme, darkTheme } from './theme';

// css`
//   :global([data-theme='light']) {
//     --color-primary: ${lightTheme.palette.primary};
//   }
//   :global([data-theme='dark']) {
//     --color-primary: ${darkTheme.palette.primary};
//   }
// `;

function buildVarLines(
  obj: Record<string, any>,
  prefix: string[] = []
): string[] {
  return Object.entries(obj).flatMap(([key, val]) => {
    const newPrefix = [...prefix, key];
    if (val !== null && typeof val === 'object') {
      // если вложенный объект — рекурсивно спускаемся глубже
      return buildVarLines(val, newPrefix);
    } else {
      // листовой узел — делаем строку
      const varName = `--${newPrefix.join('-')}`;
      return `  ${varName}: ${val};`;
    }
  });
}

const lightLines = buildVarLines(lightTheme).join('\n');
const darkLines = buildVarLines(darkTheme).join('\n');

css`
  :global([data-theme='light']) {
    ${lightLines}
  }
  :global([data-theme='dark']) {
    ${darkLines}
  }
`;

function buildTokens<T extends Record<string, any>>(
  obj: T,
  prefix: string[] = []
): T {
  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => {
      const newPrefix = [...prefix, key];
      if (val !== null && typeof val === 'object') {
        // вложенный объект — рекурсивно спускаемся, сохраняя вложенную структуру
        return [key, buildTokens(val, newPrefix)];
      } else {
        // лист — делаем var(--prefix-key)
        const varName = `--${newPrefix.join('-')}`;
        return [key, `var(${varName})`];
      }
    })
  ) as T;
}

export const tokens = buildTokens(lightTheme);

const Title = styled.h1<{ color: string }>`
  font-size: 24px;
  //color: ${(props) => props.color};
  color: ${tokens.palette.text};
  background-color: ${tokens.palette.background};
`;

export const LinariaCard = () => {
  return (
    <div className="card">
      <Title color="red">Card Title</Title>
      <p>This is a simple card component.</p>
    </div>
  );
};
