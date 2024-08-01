'use client';

import { useGetAllContactsQuery } from '@/store/api/contactsApi';
import React from 'react';

const ContactsList = () => {
  const { data } = useGetAllContactsQuery();

  return (
    <ul className="">
      <li></li>
    </ul>
  );
};

export default ContactsList;
