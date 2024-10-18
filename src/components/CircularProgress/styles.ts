import styled from 'styled-components';

export const SVGItem = styled.div`
  animation: donutfade 1s;
  padding: 0 10px;
  width: 175px;

  @keyframes donutfade {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`;
