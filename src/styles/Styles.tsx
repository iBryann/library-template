import React from 'react';
import { createPortal } from 'react-dom';

import './reset.css';
import './global.css';

export const Styles = () => {
  return createPortal(
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        rel="stylesheet"
      />
    </>,
    document.head,
  );
};
