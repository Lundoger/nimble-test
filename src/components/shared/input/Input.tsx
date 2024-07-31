'use client';

import type { InputHTMLAttributes } from 'react';
import { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  labelText?: string;
  error?: string;
  hasError?: boolean;
  onClear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      labelText,
      hasError,
      type = 'text',
      placeholder,
      onClear,
      value,
      ...props
    },
    ref
  ) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const handleOnBlur = () => {
      if (value === '') {
        setIsFocus(false);
      }
    };

    return (
      <div className={clsx('relative w-full', className)}>
        {labelText && (
          <label className={clsx('mb-[6px] pl-[6px] text-xs leading-[1.67]')}>
            {labelText}
          </label>
        )}
        <input
          {...props}
          className={clsx(
            'basic-transition h-[48px] w-full rounded-[8px] border-2 border-solid border-gray-600 pl-3 pr-[40px] text-black outline-none',
            isFocus && 'border-violet',
            hasError && 'border-red-700'
          )}
          onBlur={handleOnBlur}
          placeholder={placeholder}
          onFocus={() => setIsFocus(true)}
          ref={ref}
          type={type}
          value={value}
        />
        {onClear && (
          <button
            className={clsx(
              'basic-transition pointer-events-none absolute right-[10px] top-[50%] flex h-8 w-8 -translate-y-[10%] items-center justify-center opacity-0',
              value && 'pointer-events-auto opacity-100'
            )}
            onClick={onClear}
            type="button"
          >
            <X color="#2a2a2e" />
          </button>
        )}
      </div>
    );
  }
);
