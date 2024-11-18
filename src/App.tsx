import { RouterProvider } from 'react-router-dom';
import { ReactOverlayProvider } from './configs/react/providers/OverlayProvider';
import { QueryProvider } from './configs/react/providers/QueryProvider';
import { routes } from './pages/routes';
import { SemoGlobalStyles } from './ui/styles/SemoGlobalStyles';
import { SemoThemeProvider } from './ui/styles/SemoThemeProvider';

function App() {
  return (
    <ReactOverlayProvider>
      <QueryProvider>
        <SemoThemeProvider>
          <SemoGlobalStyles />
          <RouterProvider router={routes} />
        </SemoThemeProvider>
      </QueryProvider>
    </ReactOverlayProvider>
  );
}

export default App;
