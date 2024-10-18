import {
  EVENTS,
  IDropzoneProps,
  TErrorEventData,
  TProgressEventData,
} from './types';

function dispatchUploadEvent(
  eventName: string,
  data: TProgressEventData | TErrorEventData,
) {
  dispatchEvent(
    new CustomEvent(eventName, {
      detail: data,
    }),
  );
}

export function dispatchUploadProgress(id: string, loadedBytes: number) {
  dispatchUploadEvent(EVENTS.PROGRESS, {
    id,
    loadedBytes,
  });
}

export function dispatchUploadError(id: string, error: Error) {
  dispatchUploadEvent(EVENTS.ERROR, {
    id,
    error,
  });
}

export function validFileExt(
  file: File,
  acceptedTypes: IDropzoneProps['acceptedTypes'] = [],
) {
  let fileExt = '';

  if (file.name.includes('.')) {
    const splited = file.name.split('.');

    fileExt = '.' + splited[splited.length - 1];
  }

  if (!fileExt || (acceptedTypes.length && !acceptedTypes.includes(fileExt))) {
    return false;
  }

  return true;
}
