import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from 'app';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'shared/styles/simplify.css';

const DATA_LIVE_TIME = 1e3 * 60 * 5;

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: DATA_LIVE_TIME, retry: false } },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
