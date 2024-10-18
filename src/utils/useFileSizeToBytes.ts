export const useFileSizeToBytes = (sizeInUnit: number, unit: 'KB' | 'MB' | 'GB') => {
    switch (unit) {
      case 'KB':
        return sizeInUnit * 1024;
      case 'MB':
        return sizeInUnit * 1024 * 1024;
      case 'GB':
        return sizeInUnit * 1024 * 1024 * 1024;
      default:
        return sizeInUnit;
    }
};