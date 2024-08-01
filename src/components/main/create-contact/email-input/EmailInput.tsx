'use client';

import { Input } from '@/components/shared/input/Input';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useRef } from 'react';

const EmailInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const email = useAppSelector((state) => state.createContact.email);
  const { setEmail } = useActions();

  const handleClear = () => {
    setEmail('');
    inputRef.current?.focus();
  };

  return (
    <Input
      placeholder="type your email..."
      onClear={handleClear}
      onChange={(e) => setEmail(e.currentTarget.value)}
      ref={inputRef}
      value={email}
      labelText="Email"
    />
  );
};

export default EmailInput;
