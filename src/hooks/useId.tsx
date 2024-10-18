import { useState } from 'react';

export function useId() {
  const [id] = useState('id-' + Math.random().toString(16).slice(2));

  return id;
}