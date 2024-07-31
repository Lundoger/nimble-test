'use client';

import Title from '@/components/shared/title/Title';
import FirstNameInput from './first-name-input/FirstNameInput';
import LastNameInput from './last-name-input/LastNameInput';
import EmailInput from './email-input/EmailInput';
import { useAppSelector } from '@/hooks/useAppSelector';

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

  return (
    <div className="w-[280px] flex-shrink-0">
      <Title title={'Create Contact'} />
      <form action="" className="flex flex-col gap-3">
        <FirstNameInput />
        <LastNameInput />
        <EmailInput />
        <button
          type="submit"
          className="button basic-transition hover:bg-violet cursor-pointer rounded-[4px] bg-white py-[10px] text-center font-medium text-black hover:text-white"
        >
          Add contact
        </button>
      </form>
    </div>
  );
};

export default CreateContact;
