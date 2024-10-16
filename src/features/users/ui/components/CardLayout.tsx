import { type ReactNode } from 'react';

export const CardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      {children}
    </div>
  );
};
