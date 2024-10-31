import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from './configs/react/providers/QueryProvider';
import { routes } from './pages/routes';
import { SemoGlobalStyles } from './ui/styles/SemoGlobalStyles';
import { SemoThemeProvider } from './ui/styles/SemoThemeProvider';

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={routes} />
      <SemoThemeProvider>
        <SemoGlobalStyles />
      </SemoThemeProvider>
    </QueryProvider>
  );
}

export default App;
