import React, { useState } from 'react';
import Todos from './Todos';
import { TodoContext } from './TodoContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <main>
        <Todos />
      </main>
    </QueryClientProvider>
  );
};

export default App;
