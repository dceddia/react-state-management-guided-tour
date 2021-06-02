import React from 'react';
import Todos from './Todos';
import { QueryClient, QueryClientProvider } from 'react-query';

// One long-lived QueryClient
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
