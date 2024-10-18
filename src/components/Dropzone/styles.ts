import styled from 'styled-components';

import { COLORS, FEEDBACK_TYPES } from '../Feedback/types';
import { TextVariants } from '../Text';
import { IDragAndDropAreaProps, IDragAndDropSize } from './types';

const handleWidth = (variant: string) => {
  switch (variant) {
    case 'vertical':
      return '181px';
    case 'square':
      return '236px';
    case 'horizontal':
      return 'auto';
    default:
      return 'auto';
  }
};

export const DropzoneContainer = styled.div<IDragAndDropSize>`
  width: ${({ $variant }) => handleWidth($variant)};
  display: flex;
  gap: 16px;
  flex-direction: column;
  border-radius: 20px;
  text-align: center;
`;

function getBorder($status: FEEDBACK_TYPES | undefined) {
  if ($status) {
    return `solid ${COLORS[$status] as IDragAndDropAreaProps['$status']}`;
  }
  return 'dashed #cccccc';
}

export const DropzoneDragAndDrop = styled.label<IDragAndDropAreaProps>`
  width: 100%;
  border: 2px ${(props) => getBorder(props.$status)};
  border-radius: 20px;
  padding: 32px 24px 32px 24px;
  background-color: #f7f7f7;
  cursor: pointer;
`;

export const DropzoneInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-items: center;

  > * {
    pointer-events: none;
  }
`;

export const TEXT_SIZE: { [key: string]: TextVariants } = {
  vertical: 'body-sm',
  square: 'body',
  horizontal: 'body-lg',
};
