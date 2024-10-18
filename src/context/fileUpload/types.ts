import { ReactNode } from 'react';
import { IDropzoneProps, STATUS_OPTIONS } from '../../components/Dropzone/types';

export interface UploadFile {
  id: string;
  status: STATUS_OPTIONS;
  message: string;
  progress: number;
  abortController: AbortController;
  file: File;
  createdAt: Date;
}

export interface IFileUploadContext {
  files: UploadFile[];
  clearFiles(): void;
  cancelUpload(id: string): void;
  removeFile(id: string): void;
  upload(
    files: File[],
    hideFiles: boolean,
    callback: (fileId: string, file: File, abortController: AbortController) => void,
    validate?: IDropzoneProps['validation'],
  ): void;
}
export interface FileUploadProviderProps {
  children: ReactNode;
}
