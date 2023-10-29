/**
 * Returns string representing size of a file
 */

export const humanizeFileSize = (bytes: number | null | undefined): string => {
    if (typeof bytes !== 'number' || isNaN(bytes) || bytes === 0) return '0B';

    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
  };
