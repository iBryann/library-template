/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useCallback, useEffect, useState } from 'react';

import { FileUploadFeedback } from '../../components/Dropzone/FileUploadFeedback';
import {
  EVENTS,
  STATUS,
  TErrorEventData,
  TValidateFile,
} from '../../components/Dropzone/types';
import { getId } from '../../utils';
import { FileUploadProviderProps, IFileUploadContext, UploadFile } from './types';

export const FileUploadContext = createContext<IFileUploadContext>(
  {} as IFileUploadContext,
);

export const FileUploadProvider = ({ children }: FileUploadProviderProps) => {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [showFiles, setShowFiles] = useState(true);

  const handleProgressEvent = useCallback((event: any) => {
    setFiles((prevFiles) => {
      const nextFiles = [...prevFiles];
      const nextFile = nextFiles.find((file) => file.id === event.detail.id);

      if (nextFile && nextFile.status === STATUS.UPLOADING) {
        nextFile.progress = event.detail.loadedBytes;

        if (nextFile.progress === nextFile.file.size) {
          nextFile.status = STATUS.CONCLUDED;
        }
      }

      return nextFiles;
    });
  }, []);

  function handleErrorEvent(event: any) {
    setFiles((prevFiles) => {
      const data = event.detail as TErrorEventData;
      const nextFiles = [...prevFiles];
      const nextFile = nextFiles.find((file) => file.id === data.id);

      if (nextFile) {
        nextFile.status = STATUS.FAILED;
        nextFile.message = 'Erro no upload do arquivo';
      }

      return nextFiles;
    });
  }

  function upload(
    files: File[],
    hideFiles: boolean,
    callback: (id: string, file: File, abortController: AbortController) => void,
    validation?: (file: File) => TValidateFile,
  ) {
    const filesToUpload = files.map((file) => {
      const { message, status } = validation
        ? validation(file)
        : { status: STATUS.CONCLUDED, message: '' };
      const id = getId();
      const abortController = new AbortController();
      const fileToUpload: UploadFile = {
        id,
        file,
        status,
        message,
        progress: 0,
        abortController,
        createdAt: new Date(),
      };

      if (status !== STATUS.FAILED) {
        callback(id, file, abortController);
      }

      return fileToUpload;
    });

    setFiles((prev) => [...prev, ...filesToUpload]);
    setShowFiles(!hideFiles);
  }

  function cancelUpload(id: string) {
    const nextFiles = [...files];
    const nextFile = nextFiles.find((file) => file.id === id);
    if (nextFile) {
      nextFile.abortController.abort();
      nextFile.status = STATUS.CANCELLED;
      setFiles(nextFiles);
    }
  }

  function removeFile(id: string) {
    setFiles(files.filter((file) => file.id !== id));
  }

  function clearFiles() {
    setFiles([]);
  }

  useEffect(() => {
    window.addEventListener(EVENTS.PROGRESS, handleProgressEvent);
    window.addEventListener(EVENTS.ERROR, handleErrorEvent);

    return () => {
      window.removeEventListener(EVENTS.PROGRESS, handleProgressEvent);
      window.removeEventListener(EVENTS.ERROR, handleErrorEvent);
    };
  }, []);

  return (
    <FileUploadContext.Provider
      value={{
        files,
        clearFiles,
        cancelUpload,
        removeFile,
        upload,
      }}
    >
      {children}

      {showFiles && <FileUploadFeedback />}
    </FileUploadContext.Provider>
  );
};
