import { InputHTMLAttributes } from 'react';

import { FEEDBACK_TYPES, IFeedback } from '../Feedback/types';

export type SizeVariants = 'vertical' | 'square' | 'horizontal';

export interface IDropzoneProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    IFeedback {
  /** Texto que aparece no dropzone. */
  text?: string;
  /** Texto que aparece no dropzone enquanto operações de upload acontecem. */
  uploadingText?: string;
  /** Listagem de tipos de arquivo aceitos. Caso essa propriedade seja omitida, sera entendido que qualquer arquivo é permitido.
   *
   * Exemplo: ['.jpg', '.png', '.webp'] */
  acceptedTypes?: string[];
  /** Variações do Dropzone. */
  variant?: SizeVariants;
  /** Desabilita o feedback. */
  hideFiles?: boolean;
  /** A função a ser executada sempre que um arquivo for selecionado. */
  callback: (fileId: string, file: File, abortController: AbortController) => void;
  /** Essa função será executada para validar cada arquivo. */
  validation?: (file: File) => TValidateFile;
}

export interface DropzoneInputRef extends HTMLInputElement {
  click: () => void;
  focus: () => void;
}

export interface IDragAndDropAreaProps {
  $status?: FEEDBACK_TYPES;
}

export interface IDragAndDropSize {
  $variant: SizeVariants;
}

export type TProgressEventData = {
  id: string;
  loadedBytes: number;
};

export type TErrorEventData = {
  id: string;
  error: Error;
};

export enum EVENTS {
  PROGRESS = '@tamentai:dropzone-progress',
  ERROR = '@tamentai:dropzone-error',
}

export type STATUS_KEYS =
  | 'CANCELLED'
  | 'CONCLUDED'
  | 'FAILED'
  | 'FAILED_CONCLUDED'
  | 'UPLOADING';

export type STATUS_OPTIONS =
  | 'cancelled'
  | 'concluded'
  | 'failed'
  | 'failed concluded'
  | 'uploading';

export const STATUS: Record<STATUS_KEYS, STATUS_OPTIONS> = {
  CANCELLED: 'cancelled',
  CONCLUDED: 'concluded',
  FAILED: 'failed',
  FAILED_CONCLUDED: 'failed concluded',
  UPLOADING: 'uploading',
};

export type TValidateFile = {
  status: STATUS_OPTIONS;
  message: string;
};
