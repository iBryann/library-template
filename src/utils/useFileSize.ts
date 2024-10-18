
export const useFileSize = (sizeInBytes: number, unit: 'KB' | 'MB' | 'GB') => {
switch (unit) {
    case 'KB':
      return sizeInBytes / 1024;
    case 'MB':
      return sizeInBytes / 1024 / 1024;
    case 'GB':
      return sizeInBytes / 1024 / 1024 / 1024;
    default:
      return sizeInBytes;
  }
};
