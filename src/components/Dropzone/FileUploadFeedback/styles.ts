import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const FileUploadFeedbackContainer = styled.div`
  z-index: ${theme.zIndex.dropzone};
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 1000;
  padding: 16px 20px;
  width: 418px;
  max-height: 448px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
  }
`;

export const FileUploadTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;
`;

export const FileUploadCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: #ccc;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }
`;

export const FileUploadCard = styled.div<{ $status: string }>`
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid
    ${({ $status }) => ($status.includes('failed') ? '#9A0013' : '#ccc')};
  border-radius: 20px;
  padding: 8px 12px;
`;

export const FileUploadCardStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
`;

export const FileUploadCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .t-title {
    max-width: 238px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 767px) {
      /* viewport - icon - button */
      width: calc(100vw - 66px - 64px - 40px);
    }
  }
`;

export const FileUploadCardStatusIcon = styled.div`
  width: 50px;
  /* margin-right: 10px; */
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

export const FileUploadCardActionIcon = styled.div`
  width: 40px;
  /* margin-left: 16px; */
  display: flex;
  justify-content: center;
`;

export const CancelAllButtonContainer = styled.div`
  margin-right: 12px;
  padding-top: 30px;

  > button {
    width: fit-content;
    margin-left: auto;
    margin-right: 0;
  }

  @media (max-width: 767px) {
    > button {
      width: 100%;
    }
  }
`;
