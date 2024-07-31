'use client';

import { Input } from '@/components/shared/input/Input';
import React, { useRef, useState } from 'react';

const LastNameInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');

  const handleClear = () => {
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <Input
      placeholder="type your last name..."
      onClear={handleClear}
      onChange={(e) => setValue(e.currentTarget.value)}
      ref={inputRef}
      value={value}
      labelText="Last Name"
    />
  );
};

export default LastNameInput;
