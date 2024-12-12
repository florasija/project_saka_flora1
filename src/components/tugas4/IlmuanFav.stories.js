import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import IlmuanFav from './IlmuanFav';

const queryClient = new QueryClient();

export default {
  title: 'Components/IlmuanFav',
  component: IlmuanFav,
};

export const Default = () => (
  <QueryClientProvider client={queryClient}>
    <IlmuanFav />
  </QueryClientProvider>
);
