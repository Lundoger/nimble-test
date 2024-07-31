import clsx from 'clsx';
import React from 'react';

interface TitleProps {
  title: string;
  className?: string;
}

const Title = ({ title, className }: TitleProps) => {
  return (
    <h2
      className={clsx(
        'text-[24px] font-medium leading-[1.5] max-md:text-[20px]',
        className
      )}
    >
      {title}
    </h2>
  );
};

export default Title;
