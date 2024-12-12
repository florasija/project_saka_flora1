import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserList from './UserList';

const queryClient = new QueryClient();

export default {
  title: 'Components/UserList',
  component: UserList,
};

export const Default = () => (
  <QueryClientProvider client={queryClient}>
    <UserList />
  </QueryClientProvider>
);
