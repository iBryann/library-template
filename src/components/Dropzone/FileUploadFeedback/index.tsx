import React, { useContext, useEffect, useState } from "react";

import { createPortal } from "react-dom";
import { FileUploadContext } from "../../../context/fileUpload";
import { UploadFile } from "../../../context/fileUpload/types";
import { Icon } from "../../../icons";
import { useFileSize } from "../../../utils/useFileSize";
import { Button } from "../../Button";
import { CircularProgressBar } from "../../CircularProgress";
import { Spinner } from "../../Spinner";
import { Text } from "../../Text";
import { Title } from "../../Title";
import { STATUS } from "../types";
import {
  CancelAllButtonContainer,
  FileUploadCard,
  FileUploadCardActionIcon,
  FileUploadCardDetails,
  FileUploadCardList,
  FileUploadCardStatus,
  FileUploadCardStatusIcon,
  FileUploadFeedbackContainer,
  FileUploadTitleDiv,
} from "./styles";

export const FileUploadFeedback = () => {
  const { files, clearFiles, cancelUpload, removeFile } =
    useContext(FileUploadContext);
  const [isRetracted, setIsRetracted] = useState<boolean>(false);
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const filesBeingUploaded = files.filter((file) => {
    return file.status === STATUS.UPLOADING;
  });
  const failedFiles = files.filter((file) => {
    return (
      file.status === STATUS.FAILED || file.status === STATUS.FAILED_CONCLUDED
    );
  });

  const sortedFiles = files.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  const handleRetraction = () => {
    setIsRetracted(!isRetracted);
  };

  const handleKeyRetraction = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsRetracted(!isRetracted);
    }
  };

  const getSizeLeftToUploadInMB = (progress: number, size: number) => {
    return useFileSize(size - progress, "MB").toFixed(2);
  };

  const getProgressPercentage = (progress: number, size: number) => {
    return Math.floor((progress / size) * 100);
  };

  useEffect(() => {
    if (files.length) setIsShowing(true);
  }, [files]);

  const getCardStatus = (file: UploadFile) => {
    if (file.status === STATUS.UPLOADING) {
      return (
        <>
          <Text variant="body-sm" color="#4C4C4C">
            {getSizeLeftToUploadInMB(file.progress, file.file.size)} MB
            restantes
          </Text>
          <Text variant="body-lg">
            {" "}
            {getProgressPercentage(file.progress, file.file.size)}%{" "}
          </Text>
        </>
      );
    } else if (file.status === STATUS.CONCLUDED) {
      return (
        <Text variant="body-sm" color="#4C4C4C">
          Concluído
        </Text>
      );
    } else if (file.status === STATUS.CANCELLED) {
      return (
        <Text variant="body-sm" color="#4C4C4C">
          Cancelado
        </Text>
      );
    } else if (file.status.includes(STATUS.FAILED)) {
      return (
        <div style={{ display: "flex", alignItems: "flex-start", gap: "4px" }}>
          <Icon
            name="Error"
            size="sm"
            color="#9A0013"
            style={{ zoom: "60%" }}
          />
          <Text variant="body-sm" color="#9A0013" style={{ fontWeight: 600 }}>
            {file.message}
          </Text>
        </div>
      );
    }

    return "";
  };

  const getActionIcon = (file: UploadFile) => {
    if (file.status === STATUS.UPLOADING) {
      return (
        <Icon
          size="md"
          name="Close"
          style={{ cursor: "pointer" }}
          onClick={() => {
            cancelUpload(file.id);
          }}
        />
      );
    } else if (
      file.status === STATUS.CANCELLED ||
      file.status.includes(STATUS.FAILED)
    ) {
      return (
        <Icon
          size="md"
          name="Delete"
          style={{ cursor: "pointer" }}
          onClick={() => {
            removeFile(file.id);
          }}
        />
      );
    } else {
      return "";
    }
  };

  const getStatusIcon = (file: UploadFile) => {
    if (file.status === STATUS.UPLOADING) {
      return (
        <CircularProgressBar
          progress={getProgressPercentage(file.progress, file.file.size)}
          size="42px"
          barSize="5"
        />
      );
    } else if (file.status === STATUS.CONCLUDED) {
      return <Icon size="md" name="File" />;
    } else if (
      file.status === STATUS.CANCELLED ||
      file.status.includes(STATUS.FAILED)
    ) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M14.9969 3.91797C13.4647 3.91914 11.9631 4.34653 10.66 5.15234C9.35679 5.95814 8.30349 7.11058 7.61785 8.48078C6.80219 8.36182 5.97076 8.41221 5.17543 8.62879C4.3801 8.84538 3.63793 9.22352 2.99521 9.73963C2.35249 10.2557 1.82301 10.8987 1.43979 11.6285C1.05657 12.3583 0.827841 13.1593 0.76786 13.9814C0.707879 14.8035 0.817937 15.6291 1.09117 16.4068C1.3644 17.1845 1.79494 17.8976 2.35595 18.5015C2.91695 19.1054 3.59637 19.5873 4.35184 19.917C5.10731 20.2467 5.92262 20.4173 6.74691 20.418H14.9969C17.1849 20.418 19.2834 19.5488 20.8305 18.0016C22.3777 16.4544 23.2469 14.356 23.2469 12.168C23.2469 9.97993 22.3777 7.88151 20.8305 6.33434C19.2834 4.78716 17.1849 3.91797 14.9969 3.91797ZM14.9969 18.918H6.74691C5.55344 18.918 4.40885 18.4439 3.56493 17.5999C2.72102 16.756 2.24691 15.6114 2.24691 14.418C2.24691 13.2245 2.72102 12.0799 3.56493 11.236C4.40885 10.3921 5.55344 9.91797 6.74691 9.91797C6.85004 9.91797 6.95316 9.91797 7.05535 9.92828C6.85025 10.6572 6.74646 11.4108 6.74691 12.168C6.74691 12.3669 6.82593 12.5576 6.96658 12.6983C7.10724 12.839 7.298 12.918 7.49691 12.918C7.69583 12.918 7.88659 12.839 8.02724 12.6983C8.1679 12.5576 8.24691 12.3669 8.24691 12.168C8.24691 10.8329 8.64279 9.5279 9.38449 8.41787C10.1262 7.30784 11.1804 6.44267 12.4138 5.93178C13.6472 5.42089 15.0044 5.28722 16.3138 5.54767C17.6231 5.80812 18.8259 6.45099 19.7699 7.395C20.7139 8.339 21.3568 9.54174 21.6172 10.8511C21.8777 12.1605 21.744 13.5177 21.2331 14.7511C20.7222 15.9845 19.857 17.0387 18.747 17.7804C17.637 18.5221 16.3319 18.918 14.9969 18.918ZM17.7775 11.1986L16.0572 12.918L17.7775 14.6373C17.8472 14.707 17.9025 14.7898 17.9402 14.8808C17.9779 14.9718 17.9973 15.0694 17.9973 15.168C17.9973 15.2665 17.9779 15.3641 17.9402 15.4551C17.9025 15.5462 17.8472 15.6289 17.7775 15.6986C17.7079 15.7683 17.6251 15.8236 17.5341 15.8613C17.443 15.899 17.3455 15.9184 17.2469 15.9184C17.1484 15.9184 17.0508 15.899 16.9597 15.8613C16.8687 15.8236 16.786 15.7683 16.7163 15.6986L14.9969 13.9783L13.2775 15.6986C13.1368 15.8393 12.9459 15.9184 12.7469 15.9184C12.5479 15.9184 12.357 15.8393 12.2163 15.6986C12.0756 15.5579 11.9965 15.367 11.9965 15.168C11.9965 14.9689 12.0756 14.7781 12.2163 14.6373L13.9366 12.918L12.2163 11.1986C12.0756 11.0579 11.9965 10.867 11.9965 10.668C11.9965 10.4689 12.0756 10.2781 12.2163 10.1373C12.357 9.99661 12.5479 9.91755 12.7469 9.91755C12.9459 9.91755 13.1368 9.99661 13.2775 10.1373L14.9969 11.8577L16.7163 10.1373C16.786 10.0677 16.8687 10.0124 16.9597 9.97467C17.0508 9.93696 17.1484 9.91755 17.2469 9.91755C17.3455 9.91755 17.443 9.93696 17.5341 9.97467C17.6251 10.0124 17.7079 10.0677 17.7775 10.1373C17.8472 10.207 17.9025 10.2898 17.9402 10.3808C17.9779 10.4718 17.9973 10.5694 17.9973 10.668C17.9973 10.7665 17.9779 10.8641 17.9402 10.9551C17.9025 11.0462 17.8472 11.1289 17.7775 11.1986Z"
            fill="#4C4C4C"
          />
        </svg>
      );
    } else {
      return "";
    }
  };

  const getDescriptionText = (files: UploadFile[]) => {
    if (filesBeingUploaded.length > 0) {
      return (
        <>
          <Spinner size={20} borderWidth={3} />
          Subindo {files.length - filesBeingUploaded.length} de {files.length}{" "}
          arquivos.
          {failedFiles.length > 0 && (
            <Icon
              name="Error"
              size="sm"
              color="#9A0013"
              style={{ zoom: "80%" }}
            />
          )}
        </>
      );
    } else {
      return (
        <>
          Envios concluídos
          {failedFiles.length > 0 && (
            <Icon
              name="Error"
              size="sm"
              color="#9A0013"
              style={{ zoom: "80%" }}
            />
          )}
        </>
      );
    }
  };

  if (!isShowing) return <></>;

  return createPortal(
    <FileUploadFeedbackContainer>
      <FileUploadTitleDiv>
        {isRetracted ? (
          <Text
            variant="body"
            style={{ display: "flex", gap: "8px", alignItems: "center" }}
          >
            {getDescriptionText(files)}
          </Text>
        ) : (
          <Title variant="h4">Upload de arquivo</Title>
        )}

        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon
            name={isRetracted ? "ChevronUp" : "ChevronDown"}
            style={{ zoom: "120%", cursor: "pointer", marginRight: "10px" }}
            onClick={handleRetraction}
            onKeyDown={handleKeyRetraction}
            color="#333333"
          />

          {filesBeingUploaded.length === 0 && (
            <Icon
              size="md"
              name="Close"
              style={{ zoom: "90%", cursor: "pointer" }}
              onClick={() => {
                clearFiles();
                setIsShowing(false);
              }}
              color="#333333"
            />
          )}
        </div>
      </FileUploadTitleDiv>

      {!isRetracted && (
        <Text
          variant="body"
          style={{ display: "flex", gap: "4px", padding: "16px 0 14px 0" }}
        >
          {getDescriptionText(files)}
        </Text>
      )}

      {!isRetracted && (
        <>
          <FileUploadCardList>
            {sortedFiles.map((file) => (
              <FileUploadCard key={file.id} $status={file.status}>
                <FileUploadCardStatusIcon>
                  {getStatusIcon(file)}
                </FileUploadCardStatusIcon>

                <FileUploadCardDetails>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <Title variant="h5">{file.file.name}</Title>

                    {file.status === STATUS.CONCLUDED && (
                      <Icon size="sm" name="RoundCheckBoxOn" color="#32973D" />
                    )}
                  </div>
                  <FileUploadCardStatus>
                    {getCardStatus(file)}
                  </FileUploadCardStatus>
                </FileUploadCardDetails>

                <FileUploadCardActionIcon>
                  {getActionIcon(file)}
                </FileUploadCardActionIcon>
              </FileUploadCard>
            ))}
          </FileUploadCardList>

          {filesBeingUploaded.length > 1 && (
            <CancelAllButtonContainer>
              <Button
                size="sm"
                variant="neutral"
                onClick={() => {
                  files.forEach((file) => {
                    if (file.status === STATUS.UPLOADING) {
                      cancelUpload(file.id);
                    }
                  });
                }}
              >
                Cancelar tudo
              </Button>
            </CancelAllButtonContainer>
          )}
        </>
      )}
    </FileUploadFeedbackContainer>,
    document.body
  );
};
