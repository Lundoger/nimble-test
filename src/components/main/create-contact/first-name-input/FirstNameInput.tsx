'use client';

import { Input } from '@/components/shared/input/Input';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useRef } from 'react';

const FirstNameInput = () => {
  const firstName = useAppSelector((state) => state.createContact.firstName);
  const { setFirstName } = useActions();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setFirstName('');
    inputRef.current?.focus();
  };

  return (
    <Input
      placeholder="type your first name..."
      onClear={handleClear}
      onChange={(e) => setFirstName(e.currentTarget.value)}
      ref={inputRef}
      value={firstName}
      labelText="First Name"
    />
  );
};

export default FirstNameInput;
