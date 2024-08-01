// import { ListResponse } from '@/types';
// import { IBlog } from '@/types/blog';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getAllContacts: build.query<any, void>({
      query: () => ({
        url: 'contacts',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn', //test, lately change to process.env.API_KEY
        },
        params: {
          sort: 'created:desc',
        },
      }),
      providesTags: ['Contacts'],
    }),
    addContact: build.mutation({
      query: (body) => ({
        url: 'blog',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: `blog/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useGetAllContactsQuery } = contactsApi;
