/* eslint-disable max-len */
import React from 'react';

import { PathProps } from '../types';

export const Tutorials = ({ color = '#191919' }: PathProps) => (
  <path
    d="M21.962 9.64C21.612 9.27 21.242 8.89 21.102 8.56C20.972 8.25 20.962 7.75 20.962 7.25C20.952 6.34 20.932 5.3 20.212 4.58C19.492 3.86 18.452 3.84 17.542 3.83C17.052 3.83 16.542 3.81 16.232 3.69C15.902 3.55 15.512 3.19 15.152 2.83C14.502 2.21 13.772 1.5 12.792 1.5C11.812 1.5 11.082 2.2 10.432 2.83C10.062 3.18 9.68199 3.55 9.35199 3.69C9.05199 3.82 8.54199 3.83 8.04199 3.83C7.13199 3.84 6.09199 3.86 5.37199 4.58C4.65199 5.3 4.64199 6.34 4.62199 7.25C4.62199 7.74 4.61199 8.25 4.48199 8.56C4.34199 8.89 3.98199 9.28 3.62199 9.64C3.00199 10.29 2.29199 11.02 2.29199 12C2.29199 12.98 2.99199 13.71 3.62199 14.36C3.97199 14.73 4.34199 15.11 4.48199 15.44C4.61199 15.75 4.61199 16.25 4.62199 16.75C4.63199 17.67 4.65199 18.7 5.37199 19.42C6.09199 20.14 7.13199 20.16 8.04199 20.17C8.53199 20.17 9.04199 20.19 9.35199 20.31C9.68199 20.45 10.072 20.81 10.432 21.17C11.082 21.79 11.812 22.5 12.792 22.5C13.772 22.5 14.502 21.8 15.152 21.17C15.522 20.82 15.902 20.45 16.232 20.31C16.542 20.18 17.042 20.18 17.542 20.17C18.462 20.16 19.492 20.14 20.212 19.42C20.932 18.7 20.952 17.66 20.962 16.75C20.962 16.26 20.982 15.75 21.102 15.44C21.242 15.11 21.602 14.72 21.962 14.36C22.582 13.71 23.292 12.98 23.292 12C23.292 11.02 22.592 10.29 21.962 9.64ZM20.882 13.32C20.432 13.79 19.972 14.27 19.722 14.87C19.482 15.44 19.472 16.1 19.462 16.73C19.462 17.39 19.442 18.07 19.152 18.36C18.862 18.65 18.182 18.66 17.522 18.67C16.892 18.67 16.232 18.69 15.662 18.93C15.062 19.18 14.582 19.64 14.112 20.09C13.642 20.54 13.162 21 12.792 21C12.422 21 11.932 20.54 11.472 20.09C11.012 19.64 10.522 19.18 9.92199 18.93C9.35199 18.69 8.69199 18.68 8.06199 18.67C7.40199 18.67 6.72199 18.65 6.43199 18.36C6.14199 18.07 6.13199 17.39 6.12199 16.73C6.12199 16.1 6.10199 15.44 5.86199 14.87C5.61199 14.27 5.15199 13.79 4.70199 13.32C4.25199 12.85 3.79199 12.37 3.79199 12C3.79199 11.63 4.25199 11.14 4.70199 10.68C5.15199 10.21 5.61199 9.73 5.86199 9.13C6.10199 8.56 6.11199 7.9 6.12199 7.27C6.12199 6.61 6.14199 5.93 6.43199 5.64C6.72199 5.35 7.40199 5.34 8.06199 5.33C8.69199 5.33 9.35199 5.31 9.92199 5.07C10.522 4.82 11.002 4.36 11.472 3.91C11.942 3.46 12.422 3 12.792 3C13.162 3 13.652 3.46 14.112 3.91C14.582 4.36 15.062 4.82 15.662 5.07C16.232 5.31 16.892 5.32 17.522 5.33C18.182 5.33 18.862 5.35 19.152 5.64C19.442 5.93 19.452 6.61 19.462 7.27C19.462 7.9 19.482 8.56 19.722 9.13C19.972 9.73 20.432 10.21 20.882 10.68C21.332 11.15 21.792 11.63 21.792 12C21.792 12.37 21.332 12.86 20.882 13.32ZM13.912 16.87C13.912 17.09 13.842 17.31 13.722 17.49C13.602 17.67 13.422 17.82 13.222 17.9C13.012 17.99 12.792 18.01 12.572 17.96C12.352 17.92 12.152 17.81 11.992 17.65C11.832 17.49 11.732 17.29 11.682 17.07C11.642 16.85 11.662 16.63 11.742 16.42C11.832 16.21 11.972 16.04 12.152 15.92C12.332 15.8 12.552 15.73 12.772 15.73C13.072 15.73 13.352 15.85 13.572 16.06C13.792 16.27 13.902 16.56 13.902 16.86L13.912 16.87ZM16.532 10.12C16.532 11.75 15.242 13.11 13.532 13.43V13.5C13.532 13.7 13.452 13.89 13.312 14.03C13.172 14.17 12.982 14.25 12.782 14.25C12.582 14.25 12.392 14.17 12.252 14.03C12.112 13.89 12.032 13.7 12.032 13.5V12.75C12.032 12.55 12.112 12.36 12.252 12.22C12.392 12.08 12.582 12 12.782 12C14.022 12 15.032 11.16 15.032 10.12C15.032 9.08 14.022 8.24 12.782 8.24C11.542 8.24 10.532 9.08 10.532 10.12V10.5C10.532 10.7 10.452 10.89 10.312 11.03C10.172 11.17 9.98199 11.25 9.78199 11.25C9.58199 11.25 9.39199 11.17 9.25199 11.03C9.11199 10.89 9.03199 10.7 9.03199 10.5V10.12C9.03199 8.26 10.712 6.74 12.782 6.74C14.852 6.74 16.532 8.25 16.532 10.12Z"
    fill={color}
  />
);
