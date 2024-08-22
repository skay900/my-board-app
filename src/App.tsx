import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {CssBaseline, ThemeProvider} from '@mui/material';
import Container from '@mui/material/Container';
import {createTheme} from '@mui/material/styles';
import AppRouter from './routes/AppRouter';
import Footer from "./components/Footer/Footer";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <AppRouter/>
          </Container>
          <Footer
              title="Footer"
              description="Something here to give the footer a purpose!"
          />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
  );
}

export default App;
