import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const obj = {
  a: 1,
  'b c': 2,
  d: 3
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 color='red'> Olá </h1>
    <div>
      1<b> 2 </b>3
    </div>
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaa
  </StrictMode>
);
