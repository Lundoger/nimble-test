'use client';

import { Input } from '@/components/shared/input/Input';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useRef } from 'react';

const LastNameInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const lastName = useAppSelector((state) => state.createContact.lastName);
  const { setLastName } = useActions();

  const handleClear = () => {
    setLastName('');
    inputRef.current?.focus();
  };

  return (
    <Input
      placeholder="type your last name..."
      onClear={handleClear}
      onChange={(e) => setLastName(e.currentTarget.value)}
      ref={inputRef}
      value={lastName}
      labelText="Last Name"
    />
  );
};

export default LastNameInput;
