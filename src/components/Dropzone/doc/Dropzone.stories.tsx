import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Dropzone } from "..";
import { IDropzoneProps, STATUS } from "../types";

const defaultStory: Meta<IDropzoneProps> = {
  title: "Forms/Dropzone",
  component: Dropzone,
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
      },
    },
    feedbackType: {
      control: {
        type: "inline-radio",
      },
    },
  },
};

export default defaultStory;

export const Default: StoryObj<IDropzoneProps> = {
  args: {
    acceptedTypes: [],
    variant: "horizontal",
    text: "Arraste seu(s) arquivo(s) para cá ou clique para fazer o upload.",
    uploadingText: "Aguarde enquanto seu(s) arquivo(s) estão carregando...",
    callback: console.log,
    validation: () => ({ message: "", status: STATUS.CONCLUDED }),
    hideFiles: false,
    feedbackShow: false,
    feedbackType: "success",
    feedbackMessage: "Teste de mensagem de sucesso",
  },
};
