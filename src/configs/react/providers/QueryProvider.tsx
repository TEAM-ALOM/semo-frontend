import { type ReactNode, useRef } from 'react';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5,
          gcTime: 1000 * 60 * 10,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          retry: false,
          retryOnMount: false,
        },
      },
      queryCache: new QueryCache({
        onError: () => {},
      }),
    }),
  );

  return (
    <QueryClientProvider client={queryClient.current}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};
