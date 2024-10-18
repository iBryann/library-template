import React, {
  useState,
  useRef,
  useImperativeHandle,
  useContext,
  forwardRef,
} from "react";

export * from "./functions";
import { DropzoneInputRef, IDropzoneProps } from "./types";
import { Icon } from "../../icons";
import { Text } from "../Text";
import { useId } from "../../hooks";
import {
  DropzoneContainer,
  DropzoneDragAndDrop,
  DropzoneInformation,
  TEXT_SIZE,
} from "./styles";
import { FileUploadContext } from "../../context/fileUpload";
import { Feedback } from "../Feedback";
import { validFileExt } from "./functions";
import { Spinner } from "../Spinner";

export const Dropzone = forwardRef<DropzoneInputRef, IDropzoneProps>(
  (
    {
      callback,
      validation,
      acceptedTypes = [],
      text = "Arraste seu(s) arquivo(s) para cá ou clique para fazer o upload.",
      uploadingText = "Aguarde enquanto seu(s) arquivo(s) estão carregando...",
      variant = "horizontal",
      feedbackShow,
      feedbackType,
      feedbackMessage,
      hideFiles = false,
      ...props
    },
    ref
  ) => {
    const inputId = useId();
    const { files, upload } = useContext(FileUploadContext);
    const areFilesBeingUploaded = !!files.find((file) => {
      return file.status === "uploading";
    });
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [dragOver, setDragOver] = useState<boolean>(false);
    const [fileWithInvalidExt, setfileWithInvalidExt] = useState("");

    useImperativeHandle(ref, () => ({
      ...(fileInputRef.current as HTMLInputElement),
      click: () => {
        fileInputRef.current?.click();
      },
      focus: () => {
        fileInputRef.current?.focus();
      },
    }));

    const handleAddingFiles = (newFiles: FileList) => {
      setfileWithInvalidExt("");
      const files = Array.from(newFiles);
      const validFiles = files.filter((file) =>
        validFileExt(file, acceptedTypes)
      );

      if (files.length > validFiles.length) {
        const invalidFile = files.find(
          (file) => !validFileExt(file, acceptedTypes)
        );

        setfileWithInvalidExt(`
          O arquivo ${
            invalidFile!.name
          } não tem uma extensão válida (${acceptedTypes.join(", ")}).
        `);
      }

      if (validFiles.length) {
        upload(validFiles, hideFiles, callback, validation);
      }
    };

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      if (event.target.files) {
        handleAddingFiles(event.target.files);
      }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragOver(false);

      if (event.dataTransfer.files) {
        handleAddingFiles(event.dataTransfer.files);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Enter") {
        fileInputRef.current?.click();
      }
    };

    return (
      <DropzoneContainer {...props} ref={ref} $variant={variant}>
        <DropzoneDragAndDrop
          htmlFor={inputId}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          style={{ borderColor: dragOver ? "#005FFB" : "" }}
        >
          <DropzoneInformation
            onClick={() => (fileInputRef.current!.value = "")}
            onDrop={handleDrop}
            onDragOver={(event: React.DragEvent<HTMLDivElement>) =>
              event.preventDefault()
            }
            onDragEnter={() => setDragOver(true)}
            onDragLeave={() => setDragOver(false)}
          >
            {areFilesBeingUploaded ? (
              <Spinner size={40} borderWidth={7} />
            ) : (
              <Icon
                name="Image"
                style={{
                  zoom: variant === "vertical" ? "150%" : "200%",
                  pointerEvents: "none",
                }}
              />
            )}

            <Text
              variant={TEXT_SIZE[variant]}
              style={{ pointerEvents: "none" }}
            >
              {areFilesBeingUploaded ? uploadingText : text}
            </Text>

            {fileWithInvalidExt && (
              <Feedback
                feedbackShow
                feedbackMessage={fileWithInvalidExt}
                feedbackType={"error"}
              />
            )}

            {feedbackShow && (
              <Feedback
                disabled={props.disabled}
                feedbackShow={feedbackShow}
                feedbackMessage={feedbackMessage}
                feedbackType={feedbackType}
              />
            )}
          </DropzoneInformation>
        </DropzoneDragAndDrop>

        <input
          id={inputId}
          type="file"
          multiple
          onChange={handleClick}
          accept={acceptedTypes.join(",")}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
      </DropzoneContainer>
    );
  }
);
