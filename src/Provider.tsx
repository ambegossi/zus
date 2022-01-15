import { QueryClientProvider } from 'react-query';

import queryClient from './services/queryClient';

type Props = {
  children: React.ReactNode
}

export default function Provider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}