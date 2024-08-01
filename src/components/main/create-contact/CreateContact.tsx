'use client';

import Title from '@/components/shared/title/Title';
import FirstNameInput from './first-name-input/FirstNameInput';
import LastNameInput from './last-name-input/LastNameInput';
import EmailInput from './email-input/EmailInput';
import { useAppSelector } from '@/hooks/useAppSelector';
import { FormEvent } from 'react';

const REG_EXP = /^[a-zA-Zа-яА-Я]+$/;
const EMAIL_REG_EXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CreateContact = () => {
  const { firstName, lastName, email } = useAppSelector(
    (state) => state.createContact
  );

  const isValidate = () => {
    if (!REG_EXP.test(firstName)) return false;
    if (!REG_EXP.test(lastName)) return false;
    if (!EMAIL_REG_EXP.test(email)) return false;

    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!REG_EXP.test(firstName)) {
      console.log('not valid first name');
      return;
    }
    if (!REG_EXP.test(lastName)) {
      console.log('not valid last name');
      return;
    }
    if (!EMAIL_REG_EXP.test(email)) {
      console.log('not valid email');
      return;
    }
    console.log('All okay, submit');
  };

  return (
    <div className="w-[280px] flex-shrink-0">
      <Title title={'Create Contact'} />
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3">
        <FirstNameInput />
        <LastNameInput />
        <EmailInput />
        <button
          type="submit"
          className="button basic-transition cursor-pointer rounded-[4px] bg-white py-[10px] text-center font-medium text-black hover:bg-violet hover:text-white"
        >
          Add contact
        </button>
      </form>
    </div>
  );
};

export default CreateContact;
