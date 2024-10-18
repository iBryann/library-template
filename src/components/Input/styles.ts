import styled from 'styled-components';

import { theme } from '../../styles/theme';
import { IContainer } from './types';

export const Container = styled.fieldset<IContainer>`
  display: flex;
  flex-direction: column;

  .t-input-wrapper {
    width: calc(100% - 2px);
    height: 3rem;
    display: flex;
    gap: 12px;
    align-items: center;
    margin: 0 1px;
    padding: 0.75rem 1rem;
    border: 1px solid #cccccc;
    border-radius: 1.25rem;
    color: #1e1e1e;
    background-color: #fff;
    line-height: 3rem;

    &:hover {
      background-color: #e4eeff;
    }

    &[data-feedbacktype='info'] {
      border-color: #005ffb;
    }
    &[data-feedbacktype='error'] {
      border-color: #ea0f29;
    }
    &[data-feedbacktype='success'] {
      border-color: #3daf4a;
    }

    /* :focus-visible-within */
    &:has(:focus-visible) {
      border: 1px solid #0060fa;
      outline: 1px solid #0060fa;
    }

    .t-input-field {
      flex: 1;
      border: none;
      outline: none;
      background-color: transparent;

      &::placeholder {
        color: #666666;
      }
    }

    .t-input-icon-left {
    }

    .t-input-icon-right {
      cursor: ${({ $hasAction }) => ($hasAction ? 'pointer' : 'unset')};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;

    * {
      color: ${theme.input.disabled.primary};
      border-color: ${theme.input.disabled.primary} !important;
      fill: ${theme.input.disabled.primary};

      &::placeholder {
        color: ${theme.input.disabled.primary};
      }
    }

    .t-input-wrapper {
      background-color: ${theme.input.disabled.secondary};

      .t-input-field {
        color: #cccccc;

        &::placeholder {
          color: #cccccc;
        }
      }
    }
  }
`;
