import styled from 'styled-components';
import { StyleProps } from './types';

export const Container = styled.span<StyleProps>`
  --size: ${({ size }) => size}px;
  --color: ${({ color }) => color};
  --borderWidth: ${({ $borderWidth }) => $borderWidth}px;

  width: var(--size);
  height: var(--size);
  border: var(--borderWidth) solid var(--color);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
