import styled from 'styled-components';

import { IContainer } from './types';
import { theme } from '../../styles/theme';

export const Container = styled.div<IContainer>`
  --color: ${({ color }) => color};

  display: flex;
  gap: 0.25rem;
  align-items: center;
  margin-top: 0.5rem;
  margin-left: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--color);

  svg path {
    fill: var(--color);
  }

  &[aria-disabled='true'] {
    pointer-events: none;

    * {
      color: ${theme.input.disabled.primary} !important;
      border-color: ${theme.input.disabled.primary} !important;
      fill: ${theme.input.disabled.primary};

      &::placeholder {
        color: ${theme.input.disabled.primary};
      }
    }
  }
`;
