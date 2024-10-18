import styled, { css } from 'styled-components';

import { StyledProps, VARIANTS } from './types';
import { SIZE_ENUM } from '../../types';
import { theme } from '../../styles/theme';

const SIZE = {
  [SIZE_ENUM.LARGE]: css({
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: 0.1,
    padding: '4px 8px',
    borderRadius: 8,
  }),
  [SIZE_ENUM.MEDIUM]: css({
    fontSize: 12,
    lineHeight: '16px',
    letterSpacing: 0.5,
    padding: '4px 8px',
    borderRadius: 7,
  }),
  [SIZE_ENUM.SMALL]: css({
    fontSize: 11,
    lineHeight: '16px',
    letterSpacing: 0.5,
    padding: '2px 6px',
    borderRadius: 6,
  }),
};

export const Container = styled.div<StyledProps>`
  display: inline-block;
  text-align: center;
  font-family: Inter;
  font-weight: 500;
  ${({ $size }) => SIZE[$size as SIZE_ENUM]}
  color: ${({ $variant }) => theme.colors.tag[$variant as VARIANTS].text};
  background-color: ${({ $variant }) => theme.colors.tag[$variant as VARIANTS].bg};
`;
