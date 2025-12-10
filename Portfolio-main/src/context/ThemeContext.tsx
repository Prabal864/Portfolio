import React from 'react';

// ThemeProvider that always enforces dark mode, no toggle, no context
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return <>{children}</>;
};
