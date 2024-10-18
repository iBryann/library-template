import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWindowDimensions() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function getId() {
  const id = 'id-' + Math.random().toString(16).slice(2);

  return id;
}

export function areArraysEquivalent(array1: string[], array2: string[]) {
  if (array1.length !== array2.length) {
    return false;
  }

  const sortedArray1 = array1.slice().sort();
  const sortedArray2 = array2.slice().sort();
  return sortedArray1.every((element, index) => element === sortedArray2[index]);
}