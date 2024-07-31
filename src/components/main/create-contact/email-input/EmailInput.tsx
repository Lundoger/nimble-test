'use client';

import { Input } from '@/components/shared/input/Input';
import React, { useRef, useState } from 'react';

const EmailInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');

  const handleClear = () => {
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <Input
      placeholder="type your email..."
      onClear={handleClear}
      onChange={(e) => setValue(e.currentTarget.value)}
      ref={inputRef}
      value={value}
      labelText="Email"
    />
  );
};

export default EmailInput;
